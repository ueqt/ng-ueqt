import { Component, HostBinding, Inject } from '@angular/core';
import { UAlertModel, UAlertTypes, U_ALERT_MODEL } from './alert.model';

/**
 * 提示组件
 */
@Component({
  selector: 'u-alert',
  templateUrl: './alert.component.html',
  styleUrls: [
    './alert.component.scss'
  ]
})
export class UAlertComponent {

  constructor(@Inject(U_ALERT_MODEL) public model: UAlertModel) { }

  types = UAlertTypes;

  get styleBg(): string {
    if (this.model.type === UAlertTypes.Success) {
      return 'var(--u-primary)';
    } else if (this.model.type === UAlertTypes.Error) {
      return 'var(--u-warn)';
    } else if (this.model.type === UAlertTypes.Warn) {
      return 'var(--u-accent)';
    }
    return 'var(--u-bg)';
  }

  get styleColor(): string {
    if (this.model.type === UAlertTypes.Success) {
      return 'var(--u-primary-c)';
    } else if (this.model.type === UAlertTypes.Error) {
      return 'var(--u-warn-c)';
    } else if (this.model.type === UAlertTypes.Warn) {
      return 'var(--u-accent-c)';
    }
    return 'var(--u-text)';
  }

  get styleBorderColor(): string {
    if (this.model.type === UAlertTypes.Success) {
      return 'var(--u-primary-c)';
    } else if (this.model.type === UAlertTypes.Error) {
      return 'var(--u-warn-c)';
    } else if (this.model.type === UAlertTypes.Warn) {
      return 'var(--u-accent-c)';
    }
    return 'var(--u-text)';
  }

  doConfirm = async () => {
    if (this.model.confirmCallBack) {
      if (this.model.confirmCallBack()) {
        this.model.overlayRef.dispose();
        return;
      }
    }
    this.model.overlayRef.dispose();
  }

  doCancel = async () => {
    if (this.model.cancelCallBack) {
      if (this.model.cancelCallBack()) {
        this.model.overlayRef.dispose();
        return;
      }
    }
    this.model.overlayRef.dispose();
  }
}
