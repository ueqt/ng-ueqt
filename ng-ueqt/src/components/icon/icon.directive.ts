import {
  Directive,
  Input,
  OnInit,
  ElementRef,
  Optional,
  Renderer2,
  Inject,
  OnChanges,
} from '@angular/core';
import { UIconService, UIconPatchService } from './icon.service';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[uIcon]',
  exportAs: 'uIcon',
})
export class UIconDirective implements OnInit, OnChanges {
  /**
   * 图标类型
   */
  @Input('uIcon') iconName: string;

  /**
   * 图标尺寸
   */
  @Input() uIconSize = 16;

  /**
   * 图标样式类
   */
  @Input() uIconClass = '';

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private iconService: UIconService,
    @Optional() @Inject(DOCUMENT) protected document: any,
    @Optional() iconPatch: UIconPatchService
  ) {
    if (iconPatch) {
      iconPatch.doPatch();
    }
  }

  ngOnInit(): void {
    const el: HTMLElement = this.elementRef.nativeElement;
    this.renderer.setAttribute(el, 'class', `uicon ${el.className}`.trim());
    const icon = this.iconService.icons.find((i) => i.name === this.iconName);
    if (icon) {
      el.innerHTML = icon.icon;
      const elIcon: SVGElement = el.firstChild as SVGElement;
      this.renderer.setStyle(elIcon, 'width', this.uIconSize.toString() + 'px');
      this.renderer.setStyle(elIcon, 'height', this.uIconSize.toString() + 'px');
      this.uIconClass.split(' ').forEach(c => {
        if (c && !elIcon.classList.contains(c)) {
          this.renderer.addClass(elIcon, c);
        }
      });
      // const color = window.getComputedStyle(el).color;
      // if (color) {
      //   this.renderer.setStyle(elIcon, 'fill', color);
      // }
    }
  }

  ngOnChanges(): void {
    const el: HTMLElement = this.elementRef.nativeElement;
    const icon = this.iconService.icons.find((i) => i.name === this.iconName);
    if (icon) {
      el.innerHTML = icon.icon;
      const elIcon: SVGElement = el.firstChild as SVGElement;
      this.renderer.setStyle(elIcon, 'width', this.uIconSize.toString() + 'px');
      this.renderer.setStyle(elIcon, 'height', this.uIconSize.toString() + 'px');
      this.uIconClass.split(' ').forEach(c => {
        if (c && !elIcon.classList.contains(c)) {
          this.renderer.addClass(elIcon, c);
        }
      });
      // const elIcon: Node = el.firstChild;
      // const color = window.getComputedStyle(el).color;
      // if (color) {
      //   this.renderer.setStyle(elIcon, 'fill', color);
      // }
    }
  }
}
