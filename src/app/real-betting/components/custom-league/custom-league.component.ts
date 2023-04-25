import { Component, Input } from "@angular/core";
import { Game } from "src/app/shared/modules/game.model";

@Component({
    selector: 'app-custom-league',
    templateUrl: './custom-league.component.html',
    styleUrls: ['./custom-league.component.scss']
})
export class CustomLeagueComponent {
    @Input() leagueName = '';
    @Input() games: Game[] = [];
    @Input() iconSrc = '';
}