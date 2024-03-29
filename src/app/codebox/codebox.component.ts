/* eslint-disable max-len */
import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation
} from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'udemo-code-box',
  standalone: true,
  imports: [
    NgClass,
    MarkdownModule,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
<section class="code-box" [ngClass]="{ expand: uExpanded }">
  <section class="code-box-demo">
    <ng-content select="[demo]"></ng-content>
  </section>
  <section class="code-box-meta markdown">
    <div class="code-box-title">
      {{ uTitle }}
    </div>
    <div class="code-box-description">
      <ng-content select="[intro]"></ng-content>
    </div>
    <div class="code-box-actions">
      <i title="在 CodeSandbox 上打开" (click)="openOnlineIDE()">
        <svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="1em" height="1em"
          data-icon="code-sandbox" aria-hidden="true">
          <path
            d="M709.6 210l.4-.2h.2L512 96 313.9 209.8h-.2l.7.3L151.5 304v416L512 928l360.5-208V304l-162.9-94zM482.7 843.6L339.6 761V621.4L210 547.8V372.9l272.7 157.3v313.4zM238.2 321.5l134.7-77.8 138.9 79.7 139.1-79.9 135.2 78-273.9 158-274-158zM814 548.3l-128.8 73.1v139.1l-143.9 83V530.4L814 373.1v175.2z">
          </path>
        </svg>
      </i>
      <span class="code-expand-icon" [title]="uExpanded ?
            '收起代码' :
            '显示代码'" (click)="expandCode(!uExpanded)">
        <img alt="expand code" src="assets/images/hide-code.svg"
          [class.code-expand-icon-show]="uExpanded" [class.code-expand-icon-hide]="!uExpanded" />
        <img alt="expand code" src="assets/images/show-code.svg"
          [class.code-expand-icon-show]="!uExpanded" [class.code-expand-icon-hide]="uExpanded" />
      </span>
    </div>
  </section>
  <section class="code-box-code" [ngClass]="{ 'code-box-code-expand': uExpanded }">
    <markdown>{{ uCode | language: 'typescript' }}</markdown>
  </section>
</section>
  `,
  styleUrls: ['./codebox.component.scss'],
})
export class UdemoCodeBoxComponent {
  @Input() uTitle: string;
  @Input() uExpanded = false;
  @Input() uOnlineUrl: string;
  @Input() uCode: any;

  constructor() {}

  expandCode(expanded: boolean): void {
    this.uExpanded = expanded;
  }

  openOnlineIDE(): void {
    window.open('https://codesandbox.io/' + this.uOnlineUrl);
  }
}
