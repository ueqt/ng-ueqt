import { UModalComponent } from './../modal/modal.component';
import { DomPortalOutlet, ComponentPortal, ComponentType, TemplatePortal } from '@angular/cdk/portal';
import { ApplicationRef, Injectable, Injector, Type, ComponentFactoryResolver, TemplateRef, ViewContainerRef } from '@angular/core';

type UDynamicContentType = ComponentType<unknown> | TemplateRef<unknown>; // | string;

/**
 * 动态服务
 */
@Injectable({
  providedIn: 'root',
})
export class UDynamicService {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef
  ) { }

  /**
   * 渲染
   * @param outletElement 目标元素
   * @param componentOrTemplateRef 组件类型
   * @param args 组件参数
   * @returns 组件实例
   */
  render(
    outletElement: Element,
    componentOrTemplateRef: UDynamicContentType,
    args: any,
    viewContainerRef?: ViewContainerRef,
    modalComponent?: UModalComponent): unknown {
    // Create a portalHost from a DOM element
    const portalHost = new DomPortalOutlet(
      outletElement,
      this.componentFactoryResolver,
      this.appRef,
      this.injector
    );

    if (componentOrTemplateRef instanceof TemplateRef) {
      if (!viewContainerRef) {
        console.error('dynamic service need ViewContainerRef!');
        return;
      }
      args.modal = modalComponent;
      const portal = new TemplatePortal(componentOrTemplateRef, viewContainerRef, {
        $implicit: args
      });
      const ref = portalHost.attachTemplatePortal(portal);
      return ref.context;
    } else if (componentOrTemplateRef instanceof Type) {
      // Locate the component factory for the Component
      const portal = new ComponentPortal(componentOrTemplateRef);
      // Attach portal to host
      const ref = portalHost.attachComponentPortal(portal).instance;
      Object.keys(args).forEach((key: string) => {
        ref[key] = args[key];
      });
      return ref;
    } else {
      // string
      return undefined;
    }
  }
}
