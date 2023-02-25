import { FocusMonitor } from '@angular/cdk/a11y';
import { NgIf } from '@angular/common';
import {
  Component, ChangeDetectionStrategy, ViewEncapsulation, Input,
  HostBinding, ElementRef, ViewChild, TemplateRef,
  Output, EventEmitter, forwardRef, ChangeDetectorRef, HostListener, AfterViewInit, OnDestroy
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBoolean, UStringTemplateOutletDirective } from '../core';

@Component({
  selector: 'u-switch',
  exportAs: 'uSwitch',
  standalone: true,
  imports: [
    NgIf,
    UStringTemplateOutletDirective,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => USwitchComponent),
      multi: true
    }
  ],
  template: `
<button type="button" class="u-switch-button" #switchElement [disabled]="uDisabled" [class.u-switch-checked]="isChecked"
  [class.u-switch-disabled]="uDisabled" (keydown)="onKeyDown($event)">
  <span class="u-switch-handle">
  </span>
  <span class="u-switch-inner">
    <ng-container *ngIf="isChecked; else uncheckTemplate">
      <ng-container *uStringTemplateOutlet="uCheckedChildren">{{ uCheckedChildren }}</ng-container>
    </ng-container>
    <ng-template #uncheckTemplate>
      <ng-container *uStringTemplateOutlet="uUnCheckedChildren">{{ uUnCheckedChildren }}</ng-container>
    </ng-template>
  </span>
  <div class="u-click-animating-node"></div>
</button>
  `
})
export class USwitchComponent implements ControlValueAccessor, AfterViewInit, OnDestroy {
  /**
   * 是否禁用
   */
  @Input() @InputBoolean() uDisabled = false;
  /**
   * 开的模板
   */
  @Input() uCheckedChildren: string | TemplateRef<void> | null = null;
  /**
   * 关的模板
   */
  @Input() uUnCheckedChildren: string | TemplateRef<void> | null = null;

  @HostBinding('class.u-switch') classSwitch = true;

  @ViewChild('switchElement') private switchElement: ElementRef;

  isChecked = false;

  constructor(
    private cdr: ChangeDetectorRef,
    private focusMonitor: FocusMonitor
  ) { }

  @HostListener('click', ['$event'])
  onHostClick(e: MouseEvent): void {
    e.preventDefault();
    if (this.uDisabled) {
      return;
    }
    this.updateValue(!this.isChecked);
  }

  onChange = (value: boolean) => { };
  onTouched = () => { };


  ngAfterViewInit(): void {
    this.focusMonitor.monitor(this.switchElement.nativeElement, true).subscribe(focusOrigin => {
      if (!focusOrigin) {
        // https://github.com/angular/angular/issues/17793
        Promise.resolve().then(() => this.onTouched());
      }
    });
  }

  ngOnDestroy(): void {
    this.focusMonitor.stopMonitoring(this.switchElement.nativeElement);
  }

  updateValue(value: boolean): void {
    if (this.isChecked !== value) {
      this.isChecked = value;
      this.onChange(this.isChecked);
    }
  }

  onKeyDown(e: KeyboardEvent): void {
    if (!this.uDisabled) {
      if (e.code === 'ArrowLeft') {
        this.updateValue(false);
        e.preventDefault();
      } else if (e.code === 'ArrowRight') {
        this.updateValue(true);
        e.preventDefault();
      } else if (e.code === 'Space' || e.code === 'Enter') {
        this.updateValue(!this.isChecked);
        e.preventDefault();
      }
    }
  }

  writeValue(value: boolean): void {
    this.isChecked = value;
    this.cdr.markForCheck();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
