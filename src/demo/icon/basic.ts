import { UIconDefinition } from './../../../ng-ueqt/src/components/icon/icon.model';
import { Component } from '@angular/core';
import * as AllIcons from '../../../ng-ueqt/src/components/icon/primer-icons';

@Component({
  selector: 'udemo-icon-basic',
  template: ` 
  <i *ngFor="let icon of icons" [uIcon]="icon.name" style="color:red;"></i>
  <!-- <i uIcon="bars" style="color: red;"></i>
    <i uIcon="left"></i>
    <i uIcon="right"></i>
    <i uIcon="up"></i>
    <i uIcon="down"></i>
    <i uIcon="bars"></i> -->
    `,
})
export class UdemoIconBasicComponent {
  primerIcons = AllIcons as {
    [key: string]: UIconDefinition;
  };

  icons: UIconDefinition[] = Object.keys(this.primerIcons).map(key => this.primerIcons[key]);
}
