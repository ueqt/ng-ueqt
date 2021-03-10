import {
  Component, ChangeDetectionStrategy, ViewEncapsulation, Input, HostBinding, HostListener, Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'u-input',
  exportAs: 'uInput',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './input.component.html',
  styleUrls: [
    './input.component.scss'
  ]
})
export class UInputComponent {
  @HostBinding('class.u-input') classInput = true;

  /**
   * 标签
   */
  @Input() uLabel: string;

  /**
   * 输入类型
   */
  @Input() uType: 'text' | 'number' | 'textarea';

  /**
   * 文本
   */
  @Input() uText: string;
}
