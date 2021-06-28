import { UTabDirective } from './tab.directive';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { InputBoolean } from '../core/util';

@Component({
  selector: 'u-tab',
  exportAs: 'uTab',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-template #bodyTpl>
      <ng-content></ng-content>
    </ng-template>
  `,
})
export class UTabComponent {

  @ContentChild(UTabDirective, { read: TemplateRef }) template!: TemplateRef<
    void
  >;

  @ViewChild('bodyTpl') content: TemplateRef<void>;

  /**
   * 选项卡头显示文字
   */
  @Input() uTitle: string;
  /**
   * 自定义标题
   */
  @Input() uCustomTitle: TemplateRef<void>;
  /**
   * 是否禁用
   */
  @Input() @InputBoolean() uDisabled = false;
  /**
   * title 被点击的回调函数
   */
  @Output() readonly uClick = new EventEmitter<void>();

  /**
   * 是否活动页
   */
  isActive = false;
  /**
   * 与选中标签页的距离
   */
  position = 0;
  /**
   * 与上一个选择的标签页的距离
   */
  origin = 0;

  constructor(public elementRef: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(elementRef.nativeElement, 'u-tab');
  }
}
