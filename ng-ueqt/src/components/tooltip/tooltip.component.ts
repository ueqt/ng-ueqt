import {
  CdkConnectedOverlay, CdkOverlayOrigin, ConnectedOverlayPositionChange,
  ConnectionPositionPair, OverlayModule
} from '@angular/cdk/overlay';
import { NgClass, NgStyle } from '@angular/common';
import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, TemplateRef, ViewChild, ViewEncapsulation
} from '@angular/core';
import { Subject } from 'rxjs';
import { UConnectedOverlayDirective, UStringTemplateOutletDirective } from '../core';
import { isNotNil, toBoolean, UObject, UTSType } from '../core/util';
import { DEFAULT_TOOLTIP_POSITIONS, getPlacementName, POSITION_MAP } from './../core/overlay/overlay-position';

export type UTooltipTrigger = 'click' | 'focus' | 'hover' | null;

export const isTooltipEmpty = (
  value: string | TemplateRef<void> | null): boolean =>
  value instanceof TemplateRef ? false : value === '' ||
    !isNotNil(value);

@Component({
  selector: 'u-tooltip',
  exportAs: 'uTooltip',
  standalone: true,
  imports: [
    UStringTemplateOutletDirective,
    UConnectedOverlayDirective,
    OverlayModule,
    NgClass,
    NgStyle,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-template
        #overlay="cdkConnectedOverlay"
        cdkConnectedOverlay
        uConnectedOverlay
        [cdkConnectedOverlayOrigin]="uTooltipOrigin"
        [cdkConnectedOverlayHasBackdrop]="hasBackdrop"
        (backdropClick)="hide()"
        (detach)="hide()"
        (positionChange)="onPositionChange($event)"
        [cdkConnectedOverlayPositions]="positions"
        [cdkConnectedOverlayOpen]="visible"
        [cdkConnectedOverlayPush]="true"
    >
        <div
            class="u-tooltip"
            [ngClass]="classMap"
            [ngStyle]="uTooltipOverlayStyle"
        >
            <div class="u-tooltip-content">
                <div class="u-tooltip-arrow"></div>
                <div class="u-tooltip-inner" role="tooltip">
                    <div>
                        <div class="u-tooltip-title">
                            <ng-container *uStringTemplateOutlet="uTooltip">{{ uTooltip }}</ng-container>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ng-template>
    `
})
export class UTooltipComponent implements OnDestroy {

  @Input() uTooltip: UTSType | null = null;

  @ViewChild('overlay') overlay: CdkConnectedOverlay;

  uTooltipVisibleChange = new Subject<boolean>();
  uTooltipOverlayClassName: string;
  uTooltipOverlayStyle: UObject = {};

  hasBackdrop = false;

  visible = false;
  set uTooltipVisible(value: boolean) {
    const visible = toBoolean(value);
    if (this.visible !== visible) {
      this.visible = visible;
      this.uTooltipVisibleChange.next(visible);
    }
  }
  get uTooltipVisible(): boolean {
    return this.visible;
  }

  trigger: UTooltipTrigger = 'hover';
  set uTooltipTrigger(value: UTooltipTrigger) {
    this.trigger = value;
    this.hasBackdrop = this.trigger === 'click';
  }
  get uTooltipTrigger(): UTooltipTrigger {
    return this.trigger;
  }

  placement = 'top';
  set uTooltipPlacement(value: string) {
    if (value !== this.placement) {
      this.placement = value;
      this.positions = [POSITION_MAP[this.uTooltipPlacement], ...this.positions];
    }
  }
  get uTooltipPlacement(): string {
    return this.placement;
  }

  uTooltipOrigin: CdkOverlayOrigin;

  classMap: UObject = {};

  prefix = 'u-tooltip-placement';
  positions: ConnectionPositionPair[] = [...DEFAULT_TOOLTIP_POSITIONS];

  constructor(public cdr: ChangeDetectorRef) { }

  ngOnDestroy(): void {
    this.uTooltipVisibleChange.complete();
  }

  show(): void {
    if (this.uTooltipVisible) {
      return;
    }

    if (!this.isEmpty()) {
      this.uTooltipVisible = true;
      this.uTooltipVisibleChange.next(true);
      this.cdr.detectChanges();
    }
  }

  hide(): void {
    if (!this.uTooltipVisible) {
      return;
    }

    this.uTooltipVisible = false;
    this.uTooltipVisibleChange.next(false);
    this.cdr.detectChanges();
  }

  updateByDirective(): void {
    this.setClassMap();
    this.cdr.detectChanges();

    Promise.resolve().then(() => {
      this.updatePosition();
      this.updateVisibilityByTitle();
    });
  }

  /**
   * Force the component to update its position.
   */
  updatePosition(): void {
    if (this.uTooltipOrigin && this.overlay && this.overlay.overlayRef) {
      this.overlay.overlayRef.updatePosition();
    }
  }

  onPositionChange(position: ConnectedOverlayPositionChange): void {
    this.placement = getPlacementName(position);
    this.setClassMap();
    this.cdr.detectChanges();
  }

  setClassMap(): void {
    this.classMap = {
      [this.uTooltipOverlayClassName]: true,
      [`${this.prefix}-${this.placement}`]: true
    };
  }

  setOverlayOrigin(origin: CdkOverlayOrigin): void {
    this.uTooltipOrigin = origin;
    this.cdr.markForCheck();
  }

  protected isEmpty(): boolean {
    return isTooltipEmpty(this.uTooltip);
  }

  /**
   * Hide the component while the content is empty.
   */
  private updateVisibilityByTitle(): void {
    if (this.isEmpty()) {
      this.hide();
    }
  }
}
