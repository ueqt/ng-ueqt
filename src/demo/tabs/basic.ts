import { Component, OnInit } from '@angular/core';
import { UTabComponent, UTabsComponent } from 'ng-ueqt';


@Component({
  selector: 'udemo-tab-content-eagerly',
  standalone: true,
  template: ' eagerly ',
})
export class UDemoTabContentEagerlyComponent implements OnInit {
  ngOnInit(): void {
    console.log('I will init eagerly');
  }
}

@Component({
  selector: 'udemo-tab-content-lazy',
  standalone: true,
  template: ' lazy ',
})
export class UDemoTabContentLazyComponent implements OnInit {
  ngOnInit(): void {
    console.log('I will init when tab active');
  }
}

@Component({
  selector: 'udemo-tabs-basic',
  standalone: true,
  imports: [
    UTabComponent,
    UTabsComponent,
    UDemoTabContentEagerlyComponent,
    UDemoTabContentLazyComponent,
  ],
  template: `
    <u-tabs>
      <u-tab uTitle="eagerly">
        <udemo-tab-content-eagerly></udemo-tab-content-eagerly>
      </u-tab>
      <u-tab [uCustomTitle]="titleTemplate">
        <ng-template #titleTemplate>It's Lazy</ng-template>
        <ng-template uTab
          ><udemo-tab-content-lazy></udemo-tab-content-lazy></ng-template
      ></u-tab>
      <u-tab uTitle="long tab name 1">
        <udemo-tab-content-eagerly></udemo-tab-content-eagerly>
      </u-tab>
      <u-tab uTitle="long tab name 2">
        <udemo-tab-content-eagerly></udemo-tab-content-eagerly>
      </u-tab>
      <u-tab uTitle="long tab name 3">
        <udemo-tab-content-eagerly></udemo-tab-content-eagerly>
      </u-tab>
      <u-tab uTitle="long tab name 4">
        <udemo-tab-content-eagerly></udemo-tab-content-eagerly>
      </u-tab>
      <u-tab uTitle="long tab name 5">
        <udemo-tab-content-eagerly></udemo-tab-content-eagerly>
      </u-tab>
      <u-tab uTitle="long tab name 6">
        <udemo-tab-content-eagerly></udemo-tab-content-eagerly>
      </u-tab>
      <u-tab uTitle="long tab name 7">
        <udemo-tab-content-eagerly></udemo-tab-content-eagerly>
      </u-tab>
      <u-tab uTitle="long tab name 8">
        <udemo-tab-content-eagerly></udemo-tab-content-eagerly>
      </u-tab>
      <u-tab uTitle="long tab name 9">
        <udemo-tab-content-eagerly></udemo-tab-content-eagerly>
      </u-tab>
    </u-tabs>
  `,
})
export class UdemoTabsBasicComponent {}
