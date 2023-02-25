import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'u-input',
  exportAs: 'uInput',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    FormsModule,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UInputComponent),
      multi: true
    }
  ],
  template: `
<input *ngIf="uType !== 'textarea' && uType !== 'select'" class="u-input-content"
  [class.u-input-content-hasvalue]="!!data" [attr.type]="uType || 'text'" [(ngModel)]="data" [maxlength]="uMaxLength"
  (blur)="onBlur()" />
<textarea *ngIf="uType === 'textarea'" class="u-input-content" [class.u-input-content-hasvalue]="!!data"
  [(ngModel)]="data" [maxlength]="uMaxLength"></textarea>
<select *ngIf="uType === 'select'" class="u-input-content u-select" [class.u-input-content-hasvalue]="!!data"
  [(ngModel)]="data">
  <ng-content></ng-content>
  <ng-container *ngIf="uOptions">
    <option *ngFor="let o of uOptions" [ngValue]="o">{{o.label}}</option>
  </ng-container>
</select>
<span class="u-input-bar"></span>
<label>{{uLabel}}</label>
  `
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
