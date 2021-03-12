import { DomPortalOutlet, ComponentPortal } from '@angular/cdk/portal';
import { ApplicationRef, Injectable, Injector, Type, ComponentFactoryResolver, ComponentRef } from '@angular/core';

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
   * @param componentType 组件类型
   * @param args 组件参数
   * @returns 组件实例
   */
  render(outletElement: Element, componentType: Type<any>, args: any): ComponentRef<any> {
    // Create a portalHost from a DOM element
    const portalHost = new DomPortalOutlet(
      outletElement,
      this.componentFactoryResolver,
      this.appRef,
      this.injector
    );

    // Locate the component factory for the Component
    const portal = new ComponentPortal(componentType);

    // Attach portal to host
    const ref = portalHost.attachComponentPortal(portal).instance;

    Object.keys(args).forEach((key: string) => {
      ref[key] = args[key];
    });

    return ref;
  }
}
