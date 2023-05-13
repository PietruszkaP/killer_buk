import { Component } from "@angular/core";
import { Game } from "src/app/shared/modules/game.model";

@Component({
    selector: 'app-real',
    templateUrl: './real.component.html',
    styleUrls: ['./real.component.scss']
})
export class RealComponent {

    premierLeague: Game[] = [
        {homeTeam: 'Arsenal', drawOdds: 7, awayTeam: 'Southampton', homeWinOdds: 1.2, awayWinOdds: 12.4},
        {homeTeam: 'Fulham', drawOdds: 3.2, awayTeam: 'Leeds United', homeWinOdds: 2.4, awayWinOdds: 3.4},
        {homeTeam: 'Brentford', drawOdds: 3.3, awayTeam: 'Aston VIlla', homeWinOdds: 2.35, awayWinOdds: 3.4},
        {homeTeam: 'Crystal Palace', drawOdds: 3.9, awayTeam: 'Everton', homeWinOdds: 2.2, awayWinOdds: 2.8},
        {homeTeam: 'Leicester City', drawOdds: 3.2, awayTeam: 'Wolverhampton', homeWinOdds: 2.2, awayWinOdds: 2.4},
        {homeTeam: 'Liverpool', drawOdds: 4.3, awayTeam: 'Nottingham Forest', homeWinOdds: 1.3, awayWinOdds: 7.4},
        {homeTeam: 'Manchester United', drawOdds: 3.85, awayTeam: 'Chelsea', homeWinOdds: 1.85, awayWinOdds: 4.4},
        {homeTeam: 'AFC Bournemouth', drawOdds: 3.5, awayTeam: 'West Ham United', homeWinOdds: 2.2, awayWinOdds: 1.9},
        {homeTeam: 'Newcastle United', drawOdds: 3.2, awayTeam: 'Tottenham Hotspour', homeWinOdds: 3.2, awayWinOdds: 2.35},
        {homeTeam: 'Brighton', drawOdds: 3.2, awayTeam: 'Manchester City', homeWinOdds: 4.2, awayWinOdds: 1.4},
    ]

    serieA: Game[] = [
        {homeTeam: 'Hellas Verona', drawOdds: 3.2, awayTeam: 'Bologna', homeWinOdds: 1.2, awayWinOdds: 7.4},
        {homeTeam: 'Salernitana', drawOdds: 3.2, awayTeam: 'US Sassuolo Calcio', homeWinOdds: 1.2, awayWinOdds: 7.4},
        {homeTeam: 'Lazio Rzym', drawOdds: 3.2, awayTeam: 'Torino', homeWinOdds: 1.2, awayWinOdds: 7.4},
        {homeTeam: 'Sampdoria', drawOdds: 3.2, awayTeam: 'Spezia Calcio', homeWinOdds: 1.2, awayWinOdds: 7.4},
        {homeTeam: 'Empoli', drawOdds: 3.2, awayTeam: 'Inter Mediolan', homeWinOdds: 1.2, awayWinOdds: 7.4},
        {homeTeam: 'AC Monza', drawOdds: 3.2, awayTeam: 'Fiorentina', homeWinOdds: 1.2, awayWinOdds: 7.4},
        {homeTeam: 'Udinese', drawOdds: 3.2, awayTeam: 'Cremonese', homeWinOdds: 1.2, awayWinOdds: 7.4},
        {homeTeam: 'AC Milan', drawOdds: 3.2, awayTeam: 'Lecce', homeWinOdds: 1.2, awayWinOdds: 7.4},
        {homeTeam: 'Juventus Turyn', drawOdds: 3.2, awayTeam: 'Napoli', homeWinOdds: 1.2, awayWinOdds: 7.4},
        {homeTeam: 'Atalanta', drawOdds: 3.2, awayTeam: 'AS Roma', homeWinOdds: 1.2, awayWinOdds: 7.4},
    ];

    bundesliga: Game[] = [
        {homeTeam: 'FC Augsburg', drawOdds: 3.2, awayTeam: 'VfB Stuttgart', homeWinOdds: 1.2, awayWinOdds: 7.4},
        {homeTeam: 'Hertha Berlin', drawOdds: 3.2, awayTeam: 'Werder Brema', homeWinOdds: 1.2, awayWinOdds: 7.4},
        {homeTeam: 'Hoffenheim', drawOdds: 3.2, awayTeam: 'FC Koln', homeWinOdds: 1.2, awayWinOdds: 7.4},
        {homeTeam: 'FSV Mainz 05', drawOdds: 3.2, awayTeam: 'Bayern Monachium', homeWinOdds: 1.2, awayWinOdds: 7.4},
        {homeTeam: 'VFL Bochum', drawOdds: 3.2, awayTeam: 'VfL Wolfsburg', homeWinOdds: 1.2, awayWinOdds: 7.4},
        {homeTeam: 'Borussia Dortmund', drawOdds: 3.2, awayTeam: 'Eintracht Frankfurt', homeWinOdds: 1.2, awayWinOdds: 7.4},
        {homeTeam: 'SC Freiburg', drawOdds: 3.2, awayTeam: 'Schalke 04', homeWinOdds: 1.2, awayWinOdds: 7.4},
        {homeTeam: 'Bayer Leverkusen', drawOdds: 3.2, awayTeam: 'RB Lipsk', homeWinOdds: 1.2, awayWinOdds: 7.4},
        {homeTeam: 'Borussia Mgladbach', drawOdds: 3.2, awayTeam: 'FC Union Berlin', homeWinOdds: 1.2, awayWinOdds: 7.4},
    ]
}
