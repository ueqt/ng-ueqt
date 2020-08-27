import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  HostBinding,
} from '@angular/core';
import { InputBoolean } from '../core/util';

@Directive({
  selector: '[uTabLabel]',
  exportAs: 'uTabLabel',
})
export class UTabLabelDirective {
  @Input() @InputBoolean() disabled = false;

  @HostBinding('class.u-tabs-tab-disabled')
  get classTabsTabDisabled(): boolean {
    return this.disabled;
  }

  constructor(public elementRef: ElementRef, renderer: Renderer2) {
    renderer.addClass(elementRef.nativeElement, 'u-tabs-tab');
  }

  getOffsetLeft(): number {
    return this.elementRef.nativeElement.offsetLeft;
  }

  getOffsetWidth(): number {
    return this.elementRef.nativeElement.offsetWidth;
  }

  getOffsetTop(): number {
    return this.elementRef.nativeElement.offsetTop;
  }

  getOffsetHeight(): number {
    return this.elementRef.nativeElement.offsetHeight;
  }
}
