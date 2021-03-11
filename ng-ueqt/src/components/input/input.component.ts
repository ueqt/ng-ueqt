import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import {
  Component, ChangeDetectionStrategy, ViewEncapsulation,
  Input, HostBinding, forwardRef, ChangeDetectorRef
} from '@angular/core';

@Component({
  selector: 'u-input',
  exportAs: 'uInput',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UInputComponent),
      multi: true
    }
  ],
  templateUrl: './input.component.html',
  styleUrls: [
    './input.component.scss'
  ]
})
export class UInputComponent implements ControlValueAccessor {
  @HostBinding('class.u-input') classInput = true;

  /**
   * 标签
   */
  @Input() uLabel: string;

  /**
   * 输入类型
   */
  @Input() uType: 'text' | 'number' | 'textarea' | 'password' | 'date' | 'datetime-local' | 'email' | 'month' | 'search' | 'tel' | 'time' | 'url' | 'week';

  /**
   * 最大长度
   */
  @Input() uMaxLength: number;

  private innerText = '';
  get text(): string {
    return this.innerText;
  }
  set text(v: string) {
    if (v !== this.innerText) {
      this.innerText = v;
      this.onChange(v);
    }
  }

  onChange = (value: string) => { };
  onTouched = () => { };

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  onBlur(): void {
    this.onTouched();
  }

  writeValue(value: string): void {
    if (value !== this.text) {
      this.text = value;
      this.cdr.markForCheck();
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
