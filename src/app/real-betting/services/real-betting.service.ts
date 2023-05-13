import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Game} from "../../shared/modules/game.model";
import {VirtualUtilsService} from "../../../virtual/services/virtual-utils.service";

export interface Bet {
  game: Game;
  odd: number;
}

@Injectable({
  providedIn: 'root'
})
export class RealBettingService {
  private _betSlip: Bet[] = [];

  get getBetSlip(): Bet[] {
    return this._betSlip;
  }

  constructor(private _http: HttpClient, private _virtualUtilsService: VirtualUtilsService) {
  }

  addToBetSlip(bet: Bet): void {
    this._betSlip.push(bet);
    if (this._betSlip.length) {
      this._virtualUtilsService.showBetSlip(true);
    }
  }

}
