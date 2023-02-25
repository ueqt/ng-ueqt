import { NgForOf } from '@angular/common';
import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UTabComponent, UTabsComponent } from 'ng-ueqt';
import { MarkdownModule } from 'ngx-markdown';
import { menus } from '../../demo';
import { UdemoCode, UdemoDemoboxComponent } from './demobox.component';

@Component({
  selector: 'udemo-demo',
  standalone: true,
  imports: [
    NgForOf,
    UTabComponent,
    UTabsComponent,
    UdemoDemoboxComponent,
    MarkdownModule,
  ],
  template: `
  <u-tabs>
    <u-tab uTitle="演示">
      <udemo-demobox *ngFor="let demo of uDemos" [uDemo]="demo" [uComponent]="uComponent"></udemo-demobox>
    </u-tab>
    <u-tab uTitle="API">
      <markdown [src]="uComponent + '/' + uComponent + '.md'"></markdown>
    </u-tab>
  </u-tabs>`,
})
export class UdemoDemoComponent implements OnInit {
  uComponent: string;
  uDemos: UdemoCode[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    public viewContainerRef: ViewContainerRef,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const type = params.type;
      const found = menus.find(m => m.url === type);
      if(found) {
        this.uComponent = type;
        this.uDemos = (found as any).demos;
      }
      // const componentType= params['type'] === 'exercises' ? ExerciseComponents : SolutionComponents;
      // this.renderComponent(componentType[id]);
    });
  }
}
