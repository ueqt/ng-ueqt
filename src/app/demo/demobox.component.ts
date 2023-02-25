import { NgForOf } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { UDynamicService, UTabComponent, UTabsComponent } from 'ng-ueqt';
import { MarkdownModule } from 'ngx-markdown';
import { UdemoCodeBoxComponent } from '../codebox/codebox.component';
declare const require: any;

export class UdemoCode {
  title: string;
  type: string;
  code: any;
  onlineUrl: string;
  component: any;
}

@Component({
  selector: 'udemo-demobox',
  standalone: true,
  imports: [
    NgForOf,
    UTabComponent,
    UTabsComponent,
    UdemoCodeBoxComponent,
    MarkdownModule,
  ],
  template: `
  <udemo-code-box
    [uTitle]="uDemo.title"
    [uCode]="uDemo.code"
    [uOnlineUrl]="uDemo.onlineUrl"
  >
    <div #parent demo>
    </div>
    <div intro>
      <markdown [src]="uComponent + '/' + uDemo.type + '.md'"></markdown>
    </div>
  </udemo-code-box>
  `,
})
export class UdemoDemoboxComponent implements AfterViewInit {

  @Input() uComponent: string;

  @Input() uDemo: UdemoCode;

  @ViewChild('parent') parent: ElementRef;

  constructor(
    public dynamicService: UDynamicService
  ) {
  }

  ngAfterViewInit(): void {
    this.dynamicService.render(this.parent.nativeElement, this.uDemo.component, {});
  }
}
