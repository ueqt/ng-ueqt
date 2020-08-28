import { Directive, ElementRef, Input, NgZone, Renderer2 } from '@angular/core';

@Directive({
  selector: '[uTabsInkBar]',
  exportAs: 'uTabsInkBar',
})
export class UTabsInkBarDirective {
  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private ngZone: NgZone
  ) {
    renderer.addClass(elementRef.nativeElement, 'u-tabs-ink-bar');
  }

  alignToElement(element: HTMLElement): void {
    this.setStyles(element);
  }

  private setStyles(element: HTMLElement): void {
    const inkBar: HTMLElement = this.elementRef.nativeElement;
    inkBar.style.left = this.getLeftPosition(element);
    inkBar.style.width = this.getElementWidth(element);
  }

  getLeftPosition(element: HTMLElement): string {
    return element ? (element.offsetLeft || 0) + 'px' : '0';
  }

  getElementWidth(element: HTMLElement): string {
    return element ? (element.offsetWidth || 0) + 'px' : '0';
  }

  show(): void {
    this.elementRef.nativeElement.style.visibility = 'visible';
  }

  hide(): void {
    this.elementRef.nativeElement.style.visibility = 'hidden';
  }
}
