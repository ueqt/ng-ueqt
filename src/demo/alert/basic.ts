import { UAlertService } from './../../../ng-ueqt/src/components/alert/alert.service';
import { UButtonComponent } from './../../../ng-ueqt/src/components/button/button.component';
import { Component } from '@angular/core';
import { sleep } from 'ng-ueqt/components/core/util';

@Component({
  selector: 'udemo-alert-basic',
  template: `
  <u-button [uClick]="info" uColor="var(--u-text)">Info</u-button>
  <u-button [uClick]="success" uColor="var(--u-primary)">Success</u-button>
  <u-button [uClick]="error" uColor="var(--u-warn-5)">Error</u-button>
  <u-button [uClick]="warn" uColor="var(--u-warn)">Warn</u-button>
  <u-button [uClick]="confirm" uColor="var(--u-primary-5)">Confirm</u-button>
`,
})
export class UdemoAlertBasicComponent {

  constructor(private alertService: UAlertService) { }

  info = async () => {
    this.alertService.info('<b>info</b>');
  }

  success = async () => {
    this.alertService.success('success<br/>wow');
  }

  error = async () => {
    this.alertService.error('error');
  }

  warn = async () => {
    this.alertService.warn('warn');
  }

  confirm = async () => {
    this.alertService.confirm('confirm', () => {
      console.log('确定');
    }, () => {
      console.log('取消');
    }, '确认');
  }
}
