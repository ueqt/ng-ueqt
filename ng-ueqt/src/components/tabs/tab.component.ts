import { UTabDirective } from './tab.directive';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  Renderer2,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Subject } from 'rxjs';
import { InputBoolean } from '../core/util';

@Component({
  selector: 'u-tab',
  exportAs: 'uTab',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-template #bodyTpl>
      <ng-content></ng-content>
    </ng-template>
  `,
})
export class UTabComponent implements OnChanges, OnDestroy {
  /**
   * 是否活动页
   */
  isActive = false;
  /**
   * 与选中标签页的距离
   */
  position = 0;
  /**
   * 与上一个选择的标签页的距离
   */
  origin = 0;
  readonly stateChanges = new Subject<void>();

  @ContentChild(UTabDirective, { read: TemplateRef }) template!: TemplateRef<
    void
  >;

  @ViewChild('bodyTpl') content: TemplateRef<void>;

  @Input() uTitle: string;
  @Input() uCustomTitle: TemplateRef<void>;
  @Input() @InputBoolean() uDisabled = false;
  @Output() readonly uClick = new EventEmitter<void>();
  @Output() readonly uSelect = new EventEmitter<void>();
  @Output() readonly uDeselect = new EventEmitter<void>();

  constructor(public elementRef: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(elementRef.nativeElement, 'u-tab');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.uTitle || changes.uDisabled) {
      this.stateChanges.next();
    }
  }

  ngOnDestroy(): void {
    this.stateChanges.complete();
  }
}
