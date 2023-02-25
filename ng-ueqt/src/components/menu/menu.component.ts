import { Overlay, OverlayModule, OverlayRef } from '@angular/cdk/overlay';
import { ArrayDataSource } from '@angular/cdk/collections';
import { CdkTreeModule, FlatTreeControl } from '@angular/cdk/tree';
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
} from '@angular/core';
import { UAny } from '../core/util/types';
import { TemplatePortal } from '@angular/cdk/portal';

import * as PrimerIcons from '../icon/primer-icons';
import { UIconDefinition, UIconDirective } from '../icon';
import { CommonModule } from '@angular/common';
import { UButtonComponent, UButtonGroupComponent } from '../button';
import { provideIconChild } from '../icon/icon.provider';

const icons: UIconDefinition[] = [
  PrimerIcons.uiconUp,
  PrimerIcons.uiconDown,
  PrimerIcons.uiconLeft,
  PrimerIcons.uiconRight
];

export class UMenuNode {

  [key: string]: UAny;

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
   * 点击事件
   */
  click?: () => void;
  /**
   * 弹出窗体
   */
  overlayRef?: OverlayRef;
  /**
   * 层次级别
   */
  level?: number;
  /**
   * 是否展开状态
   */
  isExpanded?: boolean;
  /**
   * 父节点
   */
  parent?: UMenuNode;
}

@Component({
  selector: 'u-menu',
  exportAs: 'uMenu',
  standalone: true,
  imports: [
    CommonModule,
    CdkTreeModule,
    OverlayModule,
    UButtonComponent,
    UButtonGroupComponent,
    UIconDirective,
  ],
  providers: [
    provideIconChild(icons)
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
<!-- ***** 内联样式的垂直树菜单 ***** -->
<cdk-tree *ngIf="uMode === 'inline'" [dataSource]="dataSource" [treeControl]="treeControl">
    <!-- This is the tree node template for expandable nodes -->
    <cdk-tree-node *cdkTreeNodeDef="let node; when: hasChild" [cdkTreeNodePadding]="node.level"
      cdkTreeNodePaddingIndent="24" [style.display]="shouldRender(node) ? 'flex' : 'none'"
      class="u-menu-node u-menu-expandable" (click)="changeExpand(node, !node.isExpanded)">
        <ng-container *ngTemplateOutlet="uCustomNode || defaultNodeInlineTop; context: {node: node}"></ng-container>
        <ng-template #defaultNodeInlineTop let-node="node">
            {{node.name}}
        </ng-template>
        <i [uIcon]="node.isExpanded ? 'up': 'down'" cdkTreeNodeToggle
          [style.visibility]="expandable(node) ? 'visible' : 'hidden'" class="u-menu-arrow"
          (click)="changeExpand(node, !node.isExpanded)"></i>
    </cdk-tree-node>
    <!-- This is the tree node template for leaf nodes -->
    <cdk-tree-node *cdkTreeNodeDef="let node" [cdkTreeNodePadding]="node.level"
      cdkTreeNodePaddingIndent="24" (click)="selectNode(node)"
      [style.display]=" shouldRender(node) ? 'flex' : 'none'"
      class="u-menu-node u-tree-node-leaf" [ngClass]="{'u-menu-node-selected': node === selectedNode}">
        <!-- use a disabled button to provide padding for tree leaf -->
        <!-- <button mat-icon-button disabled></button> -->
        <ng-container *ngTemplateOutlet="uCustomNode || defaultNode; context: {node: node}">
        </ng-container>
        <ng-template #defaultNode let-node="node">
            {{node.name}}
        </ng-template>
    </cdk-tree-node>
</cdk-tree>
<!-- ***** 横向菜单 ***** -->
<u-button-group *ngIf="uMode === 'horizontal'">
    <u-button *ngFor="let node of uDatas" [uColor]="node.color || 'transparent'" [uClick]="openPopup" [uClickArgs]="node">
        <ng-container *ngTemplateOutlet="uCustomNode || defaultNodeHTop; context: {node: node}"></ng-container>
        <ng-template #defaultNodeHTop let-node="node">
            {{node.name}}
        </ng-template>
    </u-button>
</u-button-group>
<ng-template #templateMenuPortalContent let-node="node">
    <div tabindex="0" outline="0" hidefocus="true" (focus)="focusPopup()" (blur)="blurPopup()" style="cursor: pointer;">
        <div *ngFor="let subNode of node.children" class="u-menu-popup" (click)="openMorePopup($event, subNode)">
            <ng-container *ngTemplateOutlet="uCustomNode || defaultNodeH; context: {node: subNode}"></ng-container>
            <ng-template #defaultNodeH let-node="node">
                <span class="u-menu-popup-name">{{node.name}}</span>
            </ng-template>
            <i class="u-menu-popup-right" [uIcon]="subNode.isExpanded ? 'right': 'left'"
              [style.visibility]="expandable(subNode) ? 'visible' : 'hidden'"></i>
        </div>
    </div>
</ng-template>
<!-- ***** 竖向菜单 ***** -->
<div *ngIf="uMode === 'vertical'">
    <div *ngFor="let node of uDatas" class="u-menu-vertical-node u-menu-popup"
      (click)="openPopup(null, node, findPopupRef($event.target)) && changeExpand(node, !node.isExpanded)">
        <ng-container *ngTemplateOutlet="uCustomNode || defaultNodeHTop; context: {node: node}"></ng-container>
        <ng-template #defaultNodeHTop let-node="node">
            {{node.name}}
        </ng-template>
        <i class="u-menu-arrow" [uIcon]="node.isExpanded ? 'right': 'left'"
          [style.visibility]="expandable(node) ? 'visible' : 'hidden'"></i>
    </div>
</div>
  `
})
export class UMenuComponent implements OnChanges {

  /**
   * 数据
   */
  @Input() uDatas: UMenuNode[] = [];

  /**
   * 自定义节点模板
   */
  @Input() uCustomNode: TemplateRef<UMenuNode> | null = null;

  /**
   * 模式
   */
  @Input() uMode: 'vertical' | 'horizontal' | 'inline' = 'inline';

  /**
   * 节点点击事件
   */
  @Output() uNodeClick = new EventEmitter<UMenuNode>();

  @HostBinding('class.u-menu') menuClass = true;

  @ViewChild('templateMenuPortalContent') templateMenuPortalContent: TemplateRef<unknown>;

  selectedNode: UMenuNode = undefined;

  treeControl = new FlatTreeControl<UMenuNode>(
    (node) => node.level,
    (node) => this.expandable(node)
  );

  dataSource = new ArrayDataSource([]);
  flatNodes: UMenuNode[] = [];

  private ids = {};

  private focusCount = 0;

  /**
   * 所有打开的弹出框的node，每个index就是每个层级打开的内容
   */
  private openedPopups: UMenuNode[] = [];

  constructor(private overlay: Overlay, private viewContainerRef: ViewContainerRef) { }

  hasChild = (_: number, node: UMenuNode) => this.expandable(node);

  ngOnChanges(): void {
    this.flatNodes = [];
    this.uDatas.forEach((node) => this.flattenNode(node, 1, null));
    // console.log(this.flatNodes);
    this.dataSource = new ArrayDataSource(this.flatNodes);
  }

  shouldRender(node: UMenuNode): boolean {
    return !node.parent || node.parent.isExpanded;
  }

  changeExpand(node: UMenuNode, isExpand: boolean): void {
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

  selectNode(node: UMenuNode): void {
    this.selectedNode = node;
    if (this.uNodeClick) {
      this.uNodeClick.emit(node);
    }
  }

  /**
   * 是否可展开
   */
  expandable(node: UMenuNode): boolean {
    return !!node.children && node.children.length > 0;
  }

  closeNode(node: UMenuNode): void {
    node.isExpanded = false;
    if (node.popup) {
      node.popup.detach();
      node.popup.destroy();
      if (node.overlayRef.hasAttached) {
        node.overlayRef.detach();
      }
      node.overlayRef.dispose();
      node.popup = undefined;
    }
  }

  closeNodeAndSubNodes(node: UMenuNode): void {
    if (this.openedPopups.length >= node.level) {
      // 有已经打开的，先关闭
      for (let i = this.openedPopups.length - 1; i >= node.level - 1; i--) {
        this.closeNode(this.openedPopups[i]);
        this.openedPopups.splice(i, 1);
      }
    }
  }

  openPopup = async (_, node: UMenuNode, event: Event) => {
    const source: any = event.target || event;
    if (node.popup) {
      // 已经开着了,直接关闭
      this.closeNodeAndSubNodes(node);
    } else {
      // 没开的，也先关闭其他的，注意，这句不能提取到if外面，因为node.popup关闭后就变了
      this.closeNodeAndSubNodes(node);
      if (node.children) {
        // 有子节点，弹出子菜单
        const strategy = this.overlay.position()
          .flexibleConnectedTo(source)
          .withPositions([{
            originX: (node.level === 1 && this.uMode === 'horizontal') ? 'start' : 'end',
            originY: (node.level === 1 && this.uMode === 'horizontal') ? 'bottom' : 'top',
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
          { node }
        );
        node.popup = node.overlayRef.attach(portal);
        this.openedPopups[node.level - 1] = node;
        // 设置弹出界面焦点，离开焦点后可以消失
        (node.overlayRef.overlayElement.lastElementChild as HTMLDivElement).focus();
      } else {
        this.selectNode(node);
      }
    }
  };

  findPopupRef(target: any): any {
    if (target.classList.contains('u-menu-popup')) {
      return target;
    }
    return this.findPopupRef(target.parentNode);
  }

  openMorePopup(event: Event, node: UMenuNode): void {
    if (node.click) {
      node.click();
    }
    const target = this.findPopupRef(event.target);
    this.openPopup(undefined, node, target);
    this.changeExpand(node, !node.isExpanded);
    if (!this.expandable(node)) {
      // 最终节点，关闭菜单
      this.closeAllPopup();
    }
  }

  focusPopup(): void {
    this.focusCount++;
  }

  blurPopup(): void {
    this.focusCount--;
    setTimeout(() => {
      if (!this.focusCount) {
        // 弹出div全都失去焦点了
        this.closeAllPopup();
      }
    }, 50);
  }

  closeAllPopup(): void {
    this.flatNodes.forEach(n => {
      this.closeNodeAndSubNodes(n);
    });
  }

  /**
   * 生成id
   *
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
    parent: UMenuNode
  ): void {
    node.id = this.generateId(node.id || node.name);
    node.level = level;
    node.isExpanded = node.isExpanded || false;
    node.parent = parent;

    this.flatNodes.push(node);

    if (this.expandable(node)) {
      node.children.forEach((child, i) => {
        this.flattenNode(child, level + 1, node);
      });
    }
  }
}
