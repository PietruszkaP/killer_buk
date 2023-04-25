import { Component } from "@angular/core";
import { ButtonMode } from "src/app/shared/enums/button-mode.enum";
import { VirtualUtilsService } from "src/virtual/services/virtual-utils.service";

@Component({
    selector: 'app-create-virtual-bet',
    templateUrl: './create-virtual-bet.component.html',
    styleUrls: ['./create-virtual-bet.component.scss']
})
export class CreateVirtualComponent {
    public buttonMode = ButtonMode;

    constructor(private _virtualUtilsService: VirtualUtilsService) {

    }

    openBetSlip(): void {
        this._virtualUtilsService.showBetSlip(true);
    }

    hideBetSlip(): void {
        this._virtualUtilsService.showBetSlip(false);
    }
}