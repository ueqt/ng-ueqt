import { OverlayRef } from '@angular/cdk/overlay';
import { InjectionToken } from '@angular/core';

export const U_MODAL_MODEL_TOKEN = new InjectionToken<UModalModel>('U_MODAL_MODEL');

/**
 * 消息类型
 */
export enum UModalTypes {
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
  Confirm,
  /**
   * 自定义
   */
  Custom
}

/**
 * 模态模型
 */
export class UModalModel {
  /**
   * 类型
   */
  type: UModalTypes;
  /**
   * 消息
   */
  message?: string;
  /**
   * 标题
   */
  title?: string;
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
  /**
   * 动态加载组件类型
   */
  customComponentType?: any;
  /**
   * 动态加载参数
   */
  customArgs?: any;
}
