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
    <ng-template #titleTpl>
      <ng-content select="[u-tab-link]"></ng-content>
    </ng-template>
    <ng-template #bodyTpl>
      <ng-content></ng-content>
    </ng-template>
  `,
})
export class UTabComponent implements OnChanges, OnDestroy {
  position: number | null = null;
  origin: number | null = null;
  isActive = false;
  readonly stateChanges = new Subject<void>();

  @ContentChild(UTabDirective, { read: TemplateRef }) template!: TemplateRef<
    void
  >;

  @ViewChild('bodyTpl') content!: TemplateRef<void>;
  @ViewChild('titleTpl') title!: TemplateRef<void>;

  @Input() uTitle?: string | TemplateRef<void>;
  @Input() @InputBoolean() uForceRender = false;
  @Input() @InputBoolean() uDisabled = false;
  @Output() readonly nzClick = new EventEmitter<void>();
  @Output() readonly nzSelect = new EventEmitter<void>();
  @Output() readonly nzDeselect = new EventEmitter<void>();

  constructor(public elementRef: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(elementRef.nativeElement, 'u-tab');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.uTitle || changes.uForceRender || changes.uDisabled) {
      this.stateChanges.next();
    }
  }

  ngOnDestroy(): void {
    this.stateChanges.complete();
  }
}
