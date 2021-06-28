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
  templateUrl: './input.component.html'
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
  @Input() uType: 'text' | 'number' | 'textarea' | 'password' |
    'date' | 'datetime-local' | 'email' | 'month' | 'search' |
    'tel' | 'time' | 'url' | 'week' | 'select';

  /**
   * 最大长度
   */
  @Input() uMaxLength: number;

  /**
   * select选项
   */
  @Input() uOptions: {
    label: string,
    value: string
  }[] = [];

  private innerData = '';
  get data(): any {
    return this.innerData;
  }
  set data(v: any) {
    if (v !== this.innerData) {
      this.innerData = v;
      this.onChange(v);
    }
  }

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  onChange = (value: string) => { };
  onTouched = () => { };

  onBlur(): void {
    this.onTouched();
  }

  writeValue(value: any): void {
    if (value !== this.data) {
      this.data = value;
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
