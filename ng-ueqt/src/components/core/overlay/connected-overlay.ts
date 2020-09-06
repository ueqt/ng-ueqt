import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { Directive } from '@angular/core';

@Directive({
  selector: '[cdkConnectedOverlay][uConnectedOverlay]',
  exportAs: 'uConnectedOverlay'
})
export class UConnectedOverlayDirective {
  constructor(private cdkConnectedOverlay: CdkConnectedOverlay) {
    this.cdkConnectedOverlay.backdropClass = 'u-overlay-transparent-backdrop';
  }
}
