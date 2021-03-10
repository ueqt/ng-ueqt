import { OverlayRef } from '@angular/cdk/overlay';
import { InjectionToken } from '@angular/core';

export const U_ALERT_MODEL = new InjectionToken<UAlertModel>('U_ALERT_MODEL');

/**
 * 消息类型
 */
export enum UAlertTypes {
  /**
   * 信息
   */
  Info,
  /**
   * 成功
   */
  Success,
  /**
   * 错误
   */
  Error,
  /**
   * 警告
   */
  Warn,
  /**
   * 确认
   */
  Confirm
}

/**
 * 提示模型
 */
export class UAlertModel {
  /**
   * 类型
   */
  type: UAlertTypes;
  /**
   * 消息
   */
  message: string;
  /**
   * 确定按钮点击回调
   */
  confirmCallBack?: () => boolean | void;
  /**
   * 取消按钮点击回调
   */
  cancelCallBack?: () => boolean | void;
  /**
   * 确定按钮文字
   */
  confirmLabel?: string;
  /**
   * 取消按钮文字
   */
  cancelLabel?: string;
  /**
   * 蒙版引用
   */
  overlayRef?: OverlayRef;
}
