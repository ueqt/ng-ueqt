import { Directive, EmbeddedViewRef, Input, OnChanges, SimpleChange, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { UAny } from './../util/types';

@Directive({
  selector: '[uStringTemplateOutlet]',
  exportAs: 'uStringTemplateOutlet',
  standalone: true,
})
export class UStringTemplateOutletDirective<Template = unknown> implements OnChanges {
  @Input() uStringTemplateOutletContext: UAny | null = null;
  @Input() uStringTemplateOutlet: UAny | TemplateRef<UAny> = null;

  private embeddedViewRef: EmbeddedViewRef<UAny> | null = null;
  private context = new UStringTemplateOutletContext();

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<UAny>) { }

  static ngTemplateContextGuard<T>(dir: UStringTemplateOutletDirective<T>, ctx: UAny): ctx is UStringTemplateOutletContext {
    return true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { uStringTemplateOutletContext, uStringTemplateOutlet } = changes;
    const shouldRecreateView = (): boolean => {
      let shouldOutletRecreate = false;
      if (uStringTemplateOutlet) {
        if (uStringTemplateOutlet.firstChange) {
          shouldOutletRecreate = true;
        } else {
          const isPreviousOutletTemplate = uStringTemplateOutlet.previousValue instanceof TemplateRef;
          const isCurrentOutletTemplate = uStringTemplateOutlet.currentValue instanceof TemplateRef;
          shouldOutletRecreate = isPreviousOutletTemplate || isCurrentOutletTemplate;
        }
      }
      const hasContextShapeChanged = (ctxChange: SimpleChange): boolean => {
        const prevCtxKeys = Object.keys(ctxChange.previousValue || {});
        const currCtxKeys = Object.keys(ctxChange.currentValue || {});
        if (prevCtxKeys.length === currCtxKeys.length) {
          for (const propName of currCtxKeys) {
            if (prevCtxKeys.indexOf(propName) === -1) {
              return true;
            }
          }
          return false;
        } else {
          return true;
        }
      };
      const shouldContextRecreate = uStringTemplateOutletContext && hasContextShapeChanged(uStringTemplateOutletContext);
      return shouldContextRecreate || shouldOutletRecreate;
    };

    if (uStringTemplateOutlet) {
      this.context.$implicit = uStringTemplateOutlet.currentValue;
    }

    const recreateView = shouldRecreateView();
    if (recreateView) {
      // recreate view when context shape or outlet change
      this.recreateView();
    } else {
      // update context
      this.updateContext();
    }
  }

  private recreateView(): void {
    this.viewContainer.clear();
    const isTemplateRef = this.uStringTemplateOutlet instanceof TemplateRef;
    const templateRef = (isTemplateRef ? this.uStringTemplateOutlet : this.templateRef) as UAny;
    this.embeddedViewRef = this.viewContainer.createEmbeddedView(
      templateRef,
      isTemplateRef ? this.uStringTemplateOutletContext : this.context
    );
  }

  private updateContext(): void {
    const isTemplateRef = this.uStringTemplateOutlet instanceof TemplateRef;
    const newCtx = isTemplateRef ? this.uStringTemplateOutletContext : this.context;
    const oldCtx = this.embeddedViewRef.context as UAny;
    if (newCtx) {
      for (const propName of Object.keys(newCtx)) {
        oldCtx[propName] = newCtx[propName];
      }
    }
  }
}

export class UStringTemplateOutletContext {
  public $implicit: UAny;
}
