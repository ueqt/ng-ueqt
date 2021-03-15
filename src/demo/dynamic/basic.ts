import { UDynamicService } from './../../../ng-ueqt/src/components/dynamic/dynamic.service';
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';


@Component({
  selector: 'udemo-dynamic-basic',
  template: `<div #parent></div>`
})
export class UdemoDynamicBasicComponent implements AfterViewInit {

  @ViewChild('parent') parent: ElementRef;

  constructor(
    public dynamicService: UDynamicService
  ) {
  }

  ngAfterViewInit(): void {
    this.dynamicService.render(this.parent.nativeElement, UdemoDynamicTestComponent, {
      abc: 'world'
    });
  }
}

@Component({
  selector: 'udemo-dynamic-test',
  template: '<div>Hello {{abc}}</div>'
})
export class UdemoDynamicTestComponent {
  @Input() abc: string;
}
