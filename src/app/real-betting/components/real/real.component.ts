import { Component } from "@angular/core";
import { Game } from "src/app/shared/modules/game.model";

@Component({
    selector: 'app-real',
    templateUrl: './real.component.html',
    styleUrls: ['./real.component.scss']
})
export class RealComponent {

    premierLeague: Game[] = [
        {homeTeam: 'Arsenal', drawOdds: 3.2, awayTeam: 'Southampton', homeWinOdds: 1.2, awayWinOdds: 7.4},
        {homeTeam: 'Fulham', drawOdds: 3.2, awayTeam: 'Leeds United', homeWinOdds: 1.2, awayWinOdds: 7.4},
        {homeTeam: 'Brentford', drawOdds: 3.2, awayTeam: 'Aston VIlla', homeWinOdds: 1.2, awayWinOdds: 7.4},
        {homeTeam: 'Crystal Palace', drawOdds: 3.2, awayTeam: 'Everton', homeWinOdds: 1.2, awayWinOdds: 7.4},
        {homeTeam: 'Leicester City', drawOdds: 3.2, awayTeam: 'Wolverhampton', homeWinOdds: 1.2, awayWinOdds: 7.4},
        {homeTeam: 'Liverpool', drawOdds: 3.2, awayTeam: 'Nottingham Forest', homeWinOdds: 1.2, awayWinOdds: 7.4},
        {homeTeam: 'Manchester United', drawOdds: 3.2, awayTeam: 'Chelsea', homeWinOdds: 1.2, awayWinOdds: 7.4},
        {homeTeam: 'AFC Bournemouth', drawOdds: 3.2, awayTeam: 'West Ham United', homeWinOdds: 1.2, awayWinOdds: 7.4},
        {homeTeam: 'Newcastle United', drawOdds: 3.2, awayTeam: 'Tottenham Hotspour', homeWinOdds: 1.2, awayWinOdds: 7.4},
        {homeTeam: 'Brighton', drawOdds: 3.2, awayTeam: 'Manchester City', homeWinOdds: 1.2, awayWinOdds: 7.4},
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