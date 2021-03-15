import { Component, HostBinding, Inject, ViewChild, ElementRef, AfterViewInit, ViewContainerRef } from '@angular/core';
import { UDynamicService } from '../dynamic';
import { UModalModel, UModalTypes, U_MODAL_MODEL_TOKEN } from './modal.model';

/**
 * 模态组件
 */
@Component({
  selector: 'u-modal',
  templateUrl: './modal.component.html'
})
export class UModalComponent implements AfterViewInit {

  @ViewChild('customComponent') customComponent?: ElementRef<any>;

  types = UModalTypes;

  constructor(
    @Inject(U_MODAL_MODEL_TOKEN) public model: UModalModel,
    private dynamicService: UDynamicService,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngAfterViewInit(): void {
    if (this.customComponent) {
      this.dynamicService.render(
        this.customComponent.nativeElement,
        this.model.customComponentType,
        this.model.customArgs,
        this.viewContainerRef,
        this);
    }
  }

  get styleBg(): string {
    if (this.model.type === UModalTypes.Success) {
      return 'var(--u-primary)';
    } else if (this.model.type === UModalTypes.Error) {
      return 'var(--u-warn)';
    } else if (this.model.type === UModalTypes.Warn) {
      return 'var(--u-accent)';
    }
    return 'var(--u-bg)';
  }

  get styleColor(): string {
    if (this.model.type === UModalTypes.Success) {
      return 'var(--u-primary-c)';
    } else if (this.model.type === UModalTypes.Error) {
      return 'var(--u-warn-c)';
    } else if (this.model.type === UModalTypes.Warn) {
      return 'var(--u-accent-c)';
    }
    return 'var(--u-text)';
  }

  get styleBorderColor(): string {
    if (this.model.type === UModalTypes.Success) {
      return 'var(--u-primary-c)';
    } else if (this.model.type === UModalTypes.Error) {
      return 'var(--u-warn-c)';
    } else if (this.model.type === UModalTypes.Warn) {
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

  /**
   * 关闭
   */
  close(): void {
    this.model.overlayRef.dispose();
  }
}
