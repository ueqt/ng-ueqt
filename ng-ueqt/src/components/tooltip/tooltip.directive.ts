import { UAny } from './../core/util/types';
import {
  ComponentFactory,
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  ViewContainerRef,
  OnChanges,
  OnDestroy,
  AfterViewInit,
  SimpleChanges,
  HostBinding
} from '@angular/core';
import { UTSType, UObject } from '../core/util';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { UTooltipComponent, UTooltipTrigger } from './tooltip.component';

@Directive({
  selector: '[uTooltip]',
  exportAs: 'uTooltip'
})
export class UTooltipDirective implements OnChanges, OnDestroy, AfterViewInit {

  /**
   * 提示内容
   */
  @Input() uTooltip: UTSType;

  /**
   * 提示触发行为，为 null 时不响应光标事件
   */
  @Input() uTooltipTrigger: UTooltipTrigger = 'hover';

  /**
   * 提示位置
   */
  @Input() uTooltipPlacement = 'top';

  /**
   * 提示是否可见
   */
  @Input() uTooltipVisible: boolean;

  /**
   * 提示定位元素
   */
  @Input() uTooltipOrigin: ElementRef<HTMLElement>;

  /**
   * 提示类名
   */
  @Input() uTooltipOverlayClassName: string;

  /**
   * 提示样式
   */
  @Input() uTooltipOverlayStyle: UObject;

  /**
   * 提示显示隐藏的事件
   */
  @Output() uTooltipVisibleChange = new EventEmitter<boolean>();

  @HostBinding('class.u-tooltip-open') get tooltipOpen(): boolean { return this.uTooltipVisible; }

  componentFactory: ComponentFactory<UTooltipComponent> = this.resolver.resolveComponentFactory(UTooltipComponent);

  visible = false;

  component: UTooltipComponent;

  protected readonly destroy$ = new Subject<void>();
  protected readonly triggerDisposables: Array<() => void> = [];

  constructor(
    public elementRef: ElementRef,
    protected hostView: ViewContainerRef,
    protected resolver: ComponentFactoryResolver,
    protected renderer: Renderer2
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    const { uTooltipTrigger } = changes;

    if (uTooltipTrigger && !uTooltipTrigger.isFirstChange()) {
      this.registerTriggers();
    }

    if (this.component) {
      this.updateChangedProperties(changes);
    }
  }

  ngAfterViewInit(): void {
    this.createComponent();
    this.registerTriggers();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();

    this.removeTriggerListeners();
  }

  show(): void {
    this.component?.show();
  }

  hide(): void {
    this.component?.hide();
  }

  private get properties(): { [key: string]: any[] } {
    return {
      uTooltip: ['uTooltip', this.uTooltip],
      uTooltipTrigger: ['uTooltipTrigger', this.uTooltipTrigger],
      uTooltipPlacement: ['uTooltipPlacement', this.uTooltipPlacement],
      uTooltipVisible: ['uTooltipVisible', this.uTooltipVisible],
      uTooltipOverlayClassName: ['uTooltipOverlayClassName', this.uTooltipOverlayClassName],
      uTooltipOverlayStyle: ['uTooltipOverlayStyle', this.uTooltipOverlayStyle]
    };
  }

  /**
   * Force the component to update its position.
   */
  updatePosition(): void {
    this.component?.updatePosition();
  }

  updatePropertiesByChanges(changes: SimpleChanges): void {
    const keys = Object.keys(changes);
    keys.forEach((property: UAny) => {
      if (this.properties[property]) {
        const [name, value] = this.properties[property];
        this.updateComponentValue(name, value);
      }
    });
  }

  updatePropertiesByArray(): void {
    const keys = Object.keys(this.properties);
    keys.forEach((name: string) => {
      this.updateComponentValue(name, this.properties[name][1]);
    });
  }

  /**
   * Create a dynamic tooltip component. This method can be override.
   */
  protected createComponent(): void {
    const componentRef = this.hostView.createComponent<UTooltipComponent>(this.componentFactory);

    this.component = componentRef.instance;

    // Remove the component's DOM because it should be in the overlay container.
    this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), componentRef.location.nativeElement);
    this.component.setOverlayOrigin({ elementRef: this.uTooltipOrigin || this.elementRef });

    this.updateChangedProperties([]);

    this.component.uTooltipVisibleChange.pipe(distinctUntilChanged(), takeUntil(this.destroy$)).subscribe((visible: boolean) => {
      this.visible = visible;
      this.uTooltipVisibleChange.emit(visible);
    });
  }

  protected registerTriggers(): void {
    // When the method gets invoked, all properties has been synced to the dynamic component.
    // After removing the old API, we can just check the directive's own `uTrigger`.
    const el = this.elementRef.nativeElement;

    this.removeTriggerListeners();

    if (this.uTooltipTrigger === 'hover') {
      let overlayElement: HTMLElement;
      this.triggerDisposables.push(
        this.renderer.listen(el, 'mouseenter', () => {
          this.delayEnterLeave(true, true);
        })
      );
      this.triggerDisposables.push(
        this.renderer.listen(el, 'mouseleave', () => {
          this.delayEnterLeave(true, false);
          if (this.component?.overlay.overlayRef && !overlayElement) {
            overlayElement = this.component.overlay.overlayRef.overlayElement;
            this.triggerDisposables.push(
              this.renderer.listen(overlayElement, 'mouseenter', () => {
                this.delayEnterLeave(false, true);
              })
            );
            this.triggerDisposables.push(
              this.renderer.listen(overlayElement, 'mouseleave', () => {
                this.delayEnterLeave(false, false);
              })
            );
          }
        })
      );
    } else if (this.uTooltipTrigger === 'focus') {
      this.triggerDisposables.push(this.renderer.listen(el, 'focus', () => this.show()));
      this.triggerDisposables.push(this.renderer.listen(el, 'blur', () => this.hide()));
    } else if (this.uTooltipTrigger === 'click') {
      this.triggerDisposables.push(
        this.renderer.listen(el, 'click', e => {
          e.preventDefault();
          this.show();
        })
      );
    } // Else do nothing because user wants to control the visibility programmatically.
  }

  /**
   * Sync changed properties to the component and trigger change detection in that component.
   */
  protected updateChangedProperties(propertiesOrChanges: string[] | SimpleChanges): void {
    const isArray = Array.isArray(propertiesOrChanges);
    const keys = isArray ? (propertiesOrChanges as string[]) : Object.keys(propertiesOrChanges);
    if (isArray) {
      this.updatePropertiesByArray();
    } else {
      this.updatePropertiesByChanges(propertiesOrChanges as SimpleChanges);
    }
    this.component?.updateByDirective();
  }

  private updateComponentValue(key: string, value: UAny): void {
    if (typeof value !== 'undefined') {
      this.component[key] = value;
    }
  }

  private delayEnterLeave(isOrigin: boolean, isEnter: boolean): void {
    if (isEnter && isOrigin) {
      this.show();
    } else {
      this.hide();
    }
  }

  private removeTriggerListeners(): void {
    this.triggerDisposables.forEach(dispose => dispose());
    this.triggerDisposables.length = 0;
  }
}
