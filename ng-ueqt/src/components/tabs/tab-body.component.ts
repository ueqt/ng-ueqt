import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TemplateRef,
  ViewEncapsulation,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'u-tab-body',
  exportAs: 'uTabBody',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container *ngIf="active || forceRender">
      <ng-template [ngTemplateOutlet]="content"></ng-template>
    </ng-container>
  `,
})
export class UTabBodyComponent {
  @Input() content: TemplateRef<void> | null = null;
  @Input() active = false;
  @Input() forceRender = false;

  @HostBinding('class.u-tabs-tabpane-active')
  get classTabsTabpaneActive(): boolean {
    return this.active;
  }

  @HostBinding('class.u-tabs-tabpane-inactive')
  get classTabsTabpaneInactive(): boolean {
    return !this.active;
  }
}
