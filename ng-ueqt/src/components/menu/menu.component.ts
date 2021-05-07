import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ArrayDataSource } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  TemplateRef,
  Output,
  EventEmitter,
  HostBinding,
  OnChanges,
  ViewContainerRef,
  ViewChild,
  EmbeddedViewRef,
  ElementRef,
} from '@angular/core';
import { async } from 'rxjs';
import { UAny } from '../core/util/types';
import { TemplatePortal } from '@angular/cdk/portal';

export interface UMenuNode {
  /**
   * 唯一标识符
   */
  id?: string;
  /**
   * 显示名称
   */
  name: string;
  /**
   * 子节点
   */
  children?: UMenuNode[];
  /**
   * 颜色(仅限horizontal模式有效)
   */
  color?: string;
  /**
   * 弹出窗体
   */
  popup?: EmbeddedViewRef<unknown>;
  /**
   * 弹出窗体
   */
  overlayRef?: OverlayRef;
  [key: string]: UAny;
}

export interface UMenuFlatNode {
  /**
   * 唯一标识符
   */
  id: string;
  /**
   * 是否可展开
   */
  expandable: boolean;
  /**
   * 显示名称
   */
  name: string;
  /**
   * 层次级别
   */
  level: number;
  /**
   * 是否展开状态
   */
  isExpanded?: boolean;
  /**
   * 父节点
   */
  parent: UMenuFlatNode;
  [key: string]: UAny;
}

@Component({
  selector: 'u-menu',
  templateUrl: './menu.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UMenuComponent implements OnChanges {

  private ids = {};

  /**
   * 所有打开的弹出框的node，每个index就是每个层级打开的内容
   */
  private openedPopups: UMenuNode[] = [];

  /**
   * 数据
   */
  @Input() datas: UMenuNode[] = [];

  /**
   * 自定义节点模板
   */
  @Input() customNode: TemplateRef<UMenuNode> | null = null;

  /**
   * 模式
   */
  @Input() mode: 'vertical' | 'horizontal' | 'inline' = 'inline';

  @Output() nodeClick = new EventEmitter<UMenuFlatNode>();

  @HostBinding('class.u-menu') menuClass = true;

  @ViewChild('templateMenuPortalContent') templateMenuPortalContent: TemplateRef<unknown>;

  selectedNode: UMenuFlatNode = undefined;

  treeControl = new FlatTreeControl<UMenuFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  dataSource = new ArrayDataSource([]);
  flatNodes: UMenuFlatNode[] = [];

  hasChild = (_: number, node: UMenuFlatNode) => node.expandable;

  constructor(private overlay: Overlay, private viewContainerRef: ViewContainerRef) { }

  ngOnChanges(): void {
    this.flatNodes = this.flattenNodes();
    this.dataSource = new ArrayDataSource(this.flatNodes);
  }

  shouldRender(node: UMenuFlatNode): boolean {
    return !node.parent || node.parent.isExpanded;
  }

  changeExpand(node: UMenuFlatNode, isExpand: boolean): void {
    node.isExpanded = isExpand;
    if (!isExpand) {
      // 收缩时子节点全收缩
      this.flatNodes
        .filter((n) => n.parent === node)
        .forEach((n) => {
          this.changeExpand(n, isExpand);
        });
    }
  }

  selectNode(node: UMenuFlatNode): void {
    this.selectedNode = node;
    if (this.nodeClick) {
      this.nodeClick.emit(node);
    }
  }

  private flattenNodes(): UMenuFlatNode[] {
    const results: UMenuFlatNode[] = [];
    this.datas.forEach((node) => this.flattenNode(node, 1, results, null, 0));
    return results;
  }

  /**
   * 生成id
   * @param id 要生成的id
   */
  private generateId(id: string): string {
    if (this.ids[id]) {
      // 已经存在
      return this.generateId(id + '!');
    }
    return id;
  }

  private flattenNode(
    node: UMenuNode,
    level: number,
    results: UMenuFlatNode[],
    parent: UMenuFlatNode,
    index: number
  ): UMenuFlatNode[] {
    const flatNode: UMenuFlatNode = {
      id: this.generateId(node.id || node.name),
      name: node.name,
      level,
      expandable: !!node.children && node.children.length > 0,
      isExpanded: false,
      parent,
    };
    node.id = flatNode.id;
    if (parent) {
      parent.children[index] = flatNode;
    }
    const keys = Object.keys(flatNode);
    for (const key in node) {
      if (!keys.includes(key)) {
        flatNode[key] = node[key];
      }
    }
    results.push(flatNode);

    if (flatNode.expandable) {
      if (node.children) {
        node.children.forEach((child, i) => {
          this.flattenNode(child, level + 1, results, flatNode, i);
        });
      }
    }

    return results;
  }

  findFlatNode(node: UMenuNode): UMenuFlatNode {
    return this.flatNodes.find(n => n.id === node.id);
  }

  closeNode(node: UMenuNode): void {
    node.popup.detach();
    node.popup.destroy();
    if (node.overlayRef.hasAttached) {
      node.overlayRef.detach();
    }
    node.overlayRef.dispose();
    node.popup = undefined;
  }

  closeNodeAndSubNodes(fnode: UMenuFlatNode): void {
    if (this.openedPopups.length >= fnode.level) {
      // 有已经打开的，先关闭
      for (let i = this.openedPopups.length - 1; i >= fnode.level - 1; i--) {
        this.closeNode(this.openedPopups[i]);
        this.openedPopups.splice(i, 1);
      }
    }
  }

  openPopup = async (_, node: UMenuNode, event: Event) => {
    const source: any = event.target || event;
    const fnode = this.findFlatNode(node);
    if (node.popup) {
      // 已经开着了,直接关闭
      this.closeNodeAndSubNodes(fnode);
    } else {
      // 没开的，也先关闭其他的，注意，这句不能提取到if外面，因为node.popup关闭后就变了
      this.closeNodeAndSubNodes(fnode);
      if (node.children) {
        // 有子节点，弹出子菜单
        const strategy = this.overlay.position()
          .flexibleConnectedTo(source)
          .withPositions([{
            originX: (fnode.level === 1 && this.mode === 'horizontal') ? 'start' : 'end',
            originY: (fnode.level === 1 && this.mode === 'horizontal') ? 'bottom' : 'top',
            overlayX: 'start',
            overlayY: 'top',
            offsetX: 0,
            offsetY: 0
          }]);
        // 这么理解 origin 组件(依附空组件) 的那个点(originX, originY) 和 overlay组件的点(overlayX, overlayY)
        // 重合，从而确定overlay组件显示的位置
        strategy.withLockedPosition(true);
        node.overlayRef = this.overlay.create({
          positionStrategy: strategy,
          scrollStrategy: this.overlay.scrollStrategies.reposition() // 跟随滑动
        });
        const portal = new TemplatePortal(
          this.templateMenuPortalContent,
          this.viewContainerRef,
          { node: fnode }
        );
        node.popup = node.overlayRef.attach(portal);
        this.openedPopups[fnode.level - 1] = node;
      } else {
        this.selectNode(fnode);
      }
    }
  }

  findPopupRef(target: any): any {
    if (target.classList.contains('u-menu-popup')) {
      return target;
    }
    return this.findPopupRef(target.parentNode);
  }

  openMorePopup(event: Event, node: UMenuFlatNode): void {
    const target = this.findPopupRef(event.target);
    this.openPopup(undefined, node, target);
    this.changeExpand(node, !node.isExpanded);
  }
}
