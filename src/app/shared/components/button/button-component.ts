import { Component, Input } from "@angular/core";
import { ButtonMode } from "../../enums/button-mode.enum";

@Component({
    selector: 'app-button',
    templateUrl: 'button-component.html',
    styleUrls: ['button-component.scss']
})
export class ButtonComponent {
    @Input() text = '';
    @Input() mode = ButtonMode.DEFAULT;

    public buttonMode = ButtonMode;
}