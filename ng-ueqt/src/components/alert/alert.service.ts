import { UAlertModel, UAlertTypes, U_ALERT_MODEL } from './alert.model';
import { UAlertComponent } from './alert.component';
import { Injectable, Injector } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';


/**
 * 消息提示服务
 */
@Injectable({
  providedIn: 'root',
})
export class UAlertService {

  constructor(private overlay: Overlay, private injector: Injector) { }

  /**
   * 成功
   * @param message 消息
   */
  success(message: string): void {
    this.showAlertModel({ type: UAlertTypes.Success, message });
  }

  /**
   * 信息
   * @param message 消息
   */
  info(message: string): void {
    this.showAlertModel({ type: UAlertTypes.Info, message });
  }

  /**
   * 警告
   * @param message 消息
   */
  warn(message: string): void {
    this.showAlertModel({ type: UAlertTypes.Warn, message });
  }

  /**
   * 错误
   * @param message 消息
   */
  error(message: string): void {
    this.showAlertModel({ type: UAlertTypes.Error, message });
  }

  /**
   * 确认
   * @param message 消息
   * @param confirmCallBack 确认回调
   * @param cancelCallBack 取消回调
   * @param confirmLabel 确认标签
   * @param cancelLabel 取消标签
   * @param title 标题
   */
  confirm(
    message: string,
    confirmCallBack: () => boolean | void,
    cancelCallBack: () => boolean | void,
    confirmLabel = '确认',
    cancelLabel = '取消'): void {
    this.showAlertModel({
      type: UAlertTypes.Confirm,
      message,
      confirmCallBack,
      cancelCallBack,
      confirmLabel,
      cancelLabel
    });
  }

  /**
   * 显示提示窗口
   * @param model 模型
   */
  private showAlertModel(model: UAlertModel): void {
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy: this.overlay.position().global(),
      disposeOnNavigation: true
    });
    model.overlayRef = overlayRef;
    const injector = Injector.create({
      parent: this.injector,
      providers: [
        { provide: U_ALERT_MODEL, useValue: model }
      ]
    });
    const template = new ComponentPortal(UAlertComponent, null, injector);
    overlayRef.attach(template);
  }

}
