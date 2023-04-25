import { DOCUMENT } from "@angular/common";
import { Directive, ElementRef, EventEmitter, HostListener, Output } from "@angular/core";

@Directive({
    selector: '[clickOutside]'
})
export class ClickOutsideDirective {
    @Output() clickOutside = new EventEmitter<unknown>();

    @HostListener('document:click', ['$event.target']) onClick(target: unknown) {
        const clickedInside = this._element.nativeElement.contains(target);
        if (!clickedInside) {
            this.clickOutside.emit(target)
        }
    }

    constructor(private _element: ElementRef) {
    }
}