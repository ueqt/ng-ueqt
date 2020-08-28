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
  @Input('uIcon') iconName: string;

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
      // const elIcon: Node = el.firstChild;
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
      // const elIcon: Node = el.firstChild;
      // const color = window.getComputedStyle(el).color;
      // if (color) {
      //   this.renderer.setStyle(elIcon, 'fill', color);
      // }
    }
  }
}
