import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'udemo-code-box',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './codebox.component.html',
  styleUrls: ['./codebox.component.scss'],
})
export class UdemoCodeBoxComponent {
  @Input() uTitle: string;
  @Input() uExpanded = false;
  @Input() uOnlineUrl: string;
  @Input() uCode: any;

  constructor() {}

  expandCode(expanded: boolean): void {
    this.uExpanded = expanded;
  }

  openOnlineIDE(): void {
    window.open('https://codesandbox.io/' + this.uOnlineUrl);
  }
}
