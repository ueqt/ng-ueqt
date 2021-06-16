import { FocusMonitor } from '@angular/cdk/a11y';
import {
  Component, ChangeDetectionStrategy, ViewEncapsulation, Input,
  HostBinding, ElementRef, ViewChild, TemplateRef,
  Output, EventEmitter, forwardRef, ChangeDetectorRef, HostListener, AfterViewInit, OnDestroy
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBoolean } from '../core';

@Component({
  selector: 'u-switch',
  exportAs: 'uSwitch',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => USwitchComponent),
      multi: true
    }
  ],
  templateUrl: './switch.component.html'
})
export class USwitchComponent implements ControlValueAccessor, AfterViewInit, OnDestroy {
  @ViewChild('switchElement') private switchElement: ElementRef;

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

  isChecked = false;

  onChange = (value: boolean) => { };
  onTouched = () => { };

  constructor(
    private cdr: ChangeDetectorRef,
    private focusMonitor: FocusMonitor
  ) { }

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

  @HostListener('click', ['$event'])
  onHostClick(e: MouseEvent): void {
    e.preventDefault();
    if (this.uDisabled) {
      return;
    }
    this.updateValue(!this.isChecked);
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
