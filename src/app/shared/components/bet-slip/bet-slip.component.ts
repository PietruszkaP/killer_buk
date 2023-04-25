import { Component } from "@angular/core";

@Component({
    selector: 'app-bet-slip',
    templateUrl: './bet-slip.component.html',
    styleUrls: ['./bet-slip.component.scss']
})
export class BetSlipComponent {
    isBetSlipExpanded = false;

    constructor() {
    }

    toggleBetSlip(): void {
        this.isBetSlipExpanded = !this.isBetSlipExpanded;
    }
}