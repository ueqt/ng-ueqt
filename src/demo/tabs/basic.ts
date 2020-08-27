import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'udemo-tabs-basic',
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
    </u-tabs>
  `,
})
export class UdemoTabsBasicComponent {}

@Component({
  selector: 'udemo-tab-content-eagerly',
  template: ` eagerly `,
})
export class UDemoTabContentEagerlyComponent implements OnInit {
  ngOnInit(): void {
    console.log(`I will init eagerly`);
  }
}

@Component({
  selector: 'udemo-tab-content-lazy',
  template: ` lazy `,
})
export class UDemoTabContentLazyComponent implements OnInit {
  ngOnInit(): void {
    console.log(`I will init when tab active`);
  }
}
