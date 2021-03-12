import { UModalModel, UModalTypes, U_MODAL_MODEL_TOKEN } from './modal.model';
import { UModalComponent } from './modal.component';
import { Injectable, Injector } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';


/**
 * 模态服务
 */
@Injectable({
  providedIn: 'root',
})
export class UModalService {

  constructor(private overlay: Overlay, private injector: Injector) { }

  /**
   * 成功
   * @param message 消息
   */
  success(message: string): UModalComponent {
    return this.showModalModel({ type: UModalTypes.Success, message });
  }

  /**
   * 信息
   * @param message 消息
   */
  info(message: string): UModalComponent {
    return this.showModalModel({ type: UModalTypes.Info, message });
  }

  /**
   * 警告
   * @param message 消息
   */
  warn(message: string): UModalComponent {
    return this.showModalModel({ type: UModalTypes.Warn, message });
  }

  /**
   * 错误
   * @param message 消息
   */
  error(message: string): UModalComponent {
    return this.showModalModel({ type: UModalTypes.Error, message });
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
    cancelLabel = '取消'): UModalComponent {
    return this.showModalModel({
      type: UModalTypes.Confirm,
      message,
      confirmCallBack,
      cancelCallBack,
      confirmLabel,
      cancelLabel
    });
  }

  /**
   * 自定义内容
   */
  custom(componentType: any, args: any): UModalComponent {
    const ref = this.showModalModel({
      type: UModalTypes.Custom,
      customComponentType: componentType,
      customArgs: args
    });
    args.modal = ref;
    return ref;
  }

  /**
   * 显示模态窗口
   * @param model 模型
   */
  private showModalModel(model: UModalModel): UModalComponent {
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
        { provide: U_MODAL_MODEL_TOKEN, useValue: model }
      ]
    });
    const template = new ComponentPortal(UModalComponent, null, injector);
    return overlayRef.attach(template).instance;
  }
}
