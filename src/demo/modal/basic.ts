import { UModalComponent } from './../../../ng-ueqt/src/components/modal/modal.component';
import { UModalService } from './../../../ng-ueqt/src/components/modal/modal.service';
import { UButtonComponent } from './../../../ng-ueqt/src/components/button/button.component';
import { Component, Input } from '@angular/core';
import { sleep } from 'ng-ueqt/components/core/util';

@Component({
  selector: 'udemo-modal-basic',
  template: `
  <u-button [uClick]="info" uColor="var(--u-text)">Info</u-button>
  <u-button [uClick]="success" uColor="var(--u-primary)">Success</u-button>
  <u-button [uClick]="error" uColor="var(--u-warn)">Error</u-button>
  <u-button [uClick]="warn" uColor="var(--u-accent)">Warn</u-button>
  <u-button [uClick]="confirm" uColor="var(--u-primary)">Confirm</u-button>
  <u-button [uClick]="custom">Custom</u-button>
`,
})
export class UdemoModalBasicComponent {

  constructor(private modalService: UModalService) { }

  info = async () => {
    this.modalService.info('<b>info</b>');
  }

  success = async () => {
    this.modalService.success('success<br/>wow');
  }

  error = async () => {
    this.modalService.error('error');
  }

  warn = async () => {
    this.modalService.warn('warn');
  }

  confirm = async () => {
    this.modalService.confirm('confirm', () => {
      console.log('确定');
    }, () => {
      console.log('取消');
    }, '确认');
  }

  custom = async () => {
    const ref = this.modalService.custom(UdemoModalTestComponent, {
      abc: 'world'
    });
  }
}

@Component({
  selector: 'udemo-modal-test',
  template: `
<div class="u-modal-body">Hello {{abc}}</div>
<div class="u-modal-footer" [style.border-top-color]="modal.styleBorderColor">
  <u-button [uClick]="close">关闭</u-button>
</div>
`
})
export class UdemoModalTestComponent {

  modal: UModalComponent;

  @Input() abc: string;

  close = async () => {
    this.modal.close();
  }
}
