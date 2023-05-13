import { Component } from "@angular/core";
import {Bet, RealBettingService} from "../../../real-betting/services/real-betting.service";

@Component({
    selector: 'app-bet-slip',
    templateUrl: './bet-slip.component.html',
    styleUrls: ['./bet-slip.component.scss']
})
export class BetSlipComponent {
    isBetSlipExpanded = false;
    betSlip: Bet[] = []

    constructor(private _realBettingService: RealBettingService) {
      this.betSlip = _realBettingService.getBetSlip;
    }

    toggleBetSlip(): void {
        this.isBetSlipExpanded = !this.isBetSlipExpanded;
    }
}
