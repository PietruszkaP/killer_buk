import { Component, Input } from "@angular/core";
import { Game } from "src/app/shared/modules/game.model";
import {RealBettingService} from "../../services/real-betting.service";

@Component({
    selector: 'app-custom-league',
    templateUrl: './custom-league.component.html',
    styleUrls: ['./custom-league.component.scss']
})
export class CustomLeagueComponent {
    @Input() leagueName = '';
    @Input() games: Game[] = [];
    @Input() iconSrc = '';

    constructor(private _realBettingService: RealBettingService) {
    }


  toggleToBetSlip(game: Game, odd: number) {
    this._realBettingService.addToBetSlip({
      game: game,
      odd: odd
    })
  }
}
