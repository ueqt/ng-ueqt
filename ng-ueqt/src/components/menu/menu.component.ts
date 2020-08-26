import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  HostBinding,
  TemplateRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { ArrayDataSource } from '@angular/cdk/collections';
import { UAny } from '../core/util';

export interface UMenuNode {
  name: string;
  children?: UMenuNode[];
  [key: string]: UAny;
}

export interface UMenuFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  isExpanded?: boolean;
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
  @Input() datas: UMenuNode[] = [];
  @Input() customNode: TemplateRef<UMenuNode> | null = null;

  @Output() nodeClick = new EventEmitter<UMenuFlatNode>();

  @HostBinding('class.u-menu') menuClass = true;

  selectedNode: UMenuFlatNode = undefined;

  treeControl = new FlatTreeControl<UMenuFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  dataSource = new ArrayDataSource([]);
  private flatNodes: UMenuFlatNode[] = [];

  hasChild = (_: number, node: UMenuFlatNode) => node.expandable;

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
    this.datas.forEach((node) => this.flattenNode(node, 0, results, null));
    return results;
  }

  private flattenNode(
    node: UMenuNode,
    level: number,
    results: UMenuFlatNode[],
    parent: UMenuFlatNode
  ): UMenuFlatNode[] {
    const flatNode: UMenuFlatNode = {
      name: node.name,
      level,
      expandable: !!node.children && node.children.length > 0,
      isExpanded: false,
      parent,
    };
    const keys = Object.keys(flatNode);
    for (const key in node) {
      if (!keys.includes(key)) {
        flatNode[key] = node[key];
      }
    }
    results.push(flatNode);

    if (flatNode.expandable) {
      if (node.children) {
        node.children.forEach((child, index) => {
          this.flattenNode(child, level + 1, results, flatNode);
        });
      }
    }

    return results;
  }
}
