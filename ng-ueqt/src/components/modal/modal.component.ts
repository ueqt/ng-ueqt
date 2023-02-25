import { NgIf } from '@angular/common';
import { Component, HostBinding, Inject, ViewChild, ElementRef, AfterViewInit, ViewContainerRef, OnInit } from '@angular/core';
import { UButtonComponent } from '../button';
import { UDynamicService } from '../dynamic';
import { UModalModel, UModalTypes, U_MODAL_MODEL_TOKEN } from './modal.model';

/**
 * 模态组件
 */
@Component({
  selector: 'u-modal',
  exportAs: 'uModal',
  standalone: true,
  imports: [
    NgIf,
    UButtonComponent,
  ],
  template: `
<div class="u-modal-container">
  <div class="u-modal" [style.background-color]="styleBg" [style.color]="styleColor">
    <div *ngIf="!ignoreTitleBar" class="u-modal-title-bar">
      <span class="u-modal-title">{{model.title}}</span>
      <u-button style="float: right;" uColor="var(--u-primary)" [uClick]="defaultClose">X</u-button>
    </div>
    <div class="u-modal-content">
      <div *ngIf="model.message" class="u-modal-body" [innerHtml]="model.message">
      </div>
      <div *ngIf="model.customComponentType" #customComponent>
      </div>
      <div *ngIf="!model.customComponentType" class="u-modal-footer" [style.border-top-color]="styleBorderColor">
        <u-button [uClick]="doConfirm">{{ model.confirmLabel || '确定' }}</u-button>
        <u-button *ngIf="model.type === types.Confirm" [uClick]="doCancel">{{ model.cancelLabel || '取消' }}</u-button>
      </div>
    </div>
  </div>
</div>
  `
})
export class UModalComponent implements OnInit, AfterViewInit {

  @ViewChild('customComponent') customComponent?: ElementRef<any>;

  types = UModalTypes;

  ignoreTitleBar = false;

  constructor(
    @Inject(U_MODAL_MODEL_TOKEN) public model: UModalModel,
    private dynamicService: UDynamicService,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
    if (this.model.type !== UModalTypes.Custom) {
      this.ignoreTitleBar = true;
    }
  }

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
  };

  doCancel = async () => {
    if (this.model.cancelCallBack) {
      if (this.model.cancelCallBack()) {
        this.model.overlayRef.dispose();
        return;
      }
    }
    this.model.overlayRef.dispose();
  };

  defaultClose = async () => {
    this.close();
  };

  /**
   * 关闭
   */
  close(): void {
    this.model.overlayRef.dispose();
  }
}
