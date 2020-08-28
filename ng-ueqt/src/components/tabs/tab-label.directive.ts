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

  /** Whether the tab link is active or not. */
  protected mIsActive = false;

  /** Whether the link is active. */
  @Input()
  get active(): boolean {
    return this.mIsActive;
  }
  set active(value: boolean) {
    if (value !== this.mIsActive) {
      this.mIsActive = value;
      // this.tabNavBar.updateActiveLink(this.elementRef);
    }
  }

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

  /** Sets focus on the wrapper element */
  focus(): void {
    this.elementRef.nativeElement.focus();
  }
}
