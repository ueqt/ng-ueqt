import { Observable } from 'rxjs';
import {
    Component, ChangeDetectionStrategy, ViewEncapsulation, Input, HostBinding, HostListener, Output, EventEmitter
} from '@angular/core';
import { getContrastHex, getHexColor, hexToRgb, rgbContrast, rgbToHex } from '../core/util';

@Component({
    selector: 'u-button',
    exportAs: 'uButton',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <ng-content></ng-content>
    `
})
export class UButtonComponent {

    isLoading = false;

    @Input() uColor = 'var(--u-primary)';

    @Input() uDisabled = false;

    @Input() uClick: () => Promise<void>;

    @HostBinding('class.u-button') classButton = true;

    @HostBinding('attr.disabled') get isDisabled(): boolean {
        return this.uDisabled || null;
    }

    @HostBinding('class.u-button-loading')
    get classButtonLoading(): boolean {
        return this.isLoading;
    }

    @HostBinding('style.background-color')
    get styleButtonBackgroundColor(): string {
        return this.uColor;
    }

    @HostBinding('style.color')
    get styleButtonColor(): string {
        return getContrastHex(this.uColor);
    }

    @HostBinding('style.border-color')
    get styleButtonBorderColor(): string {
        return getContrastHex(this.uColor);
    }

    @HostListener('click', ['$event']) async onClick(event: Event): Promise<void> {
        event.preventDefault();
        event.stopPropagation();

        if (this.uDisabled || this.isLoading) {
            // console.log(event);
            return;
        }

        this.isLoading = true;

        if (this.uClick) {
            try {
                await this.uClick();
            } catch (e) {
                throw e;
            } finally {
                this.isLoading = false;
            }
        }
        this.isLoading = false;
    }
}
