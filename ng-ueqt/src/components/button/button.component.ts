import {
    Component, ChangeDetectionStrategy, ViewEncapsulation, Input, HostBinding, HostListener
} from '@angular/core';

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

    private animating = false;

    @Input() uLoading = false;

    @Input() uColor = 'var(--u-primary)';

    @Input() uDisabled = false;

    @HostBinding('class.u-button') classButton = true;

    @HostBinding('attr.disabled') get isDisabled(): boolean {
        return this.uDisabled || null;
    }

    @HostBinding('class.u-button-loading')
    get classButtonLoading(): boolean {
        return this.uLoading;
    }

    @HostBinding('style.color')
    get styleButtonColor(): string {
        return this.uColor;
    }

    @HostBinding('style.border-color')
    get styleButtonBorderColor(): string {
        return this.uColor;
    }

    @HostBinding('class.u-button-animate')
    get classButtonAnimate(): boolean {
        return this.animating;
    }

    @HostListener('click', ['$event']) onClick(event: Event): void {
        if (this.uDisabled) {
            console.log(event);
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        this.animating = true;
        setTimeout(() => {
            this.animating = false;
        }, 700);
    }
}
