import {Component} from "@angular/core";
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';

export interface PeriodicElement {
  position: number;
  team: string;
  src: string;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  goalsDifference: number;
  points: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, team: 'Arsenal', src: "../../../assets/arsenal.jpg/", played: 33, wins: 23, draws: 6, losses: 4, goalsFor: 78, goalsAgainst: 37, goalsDifference: 41, points: 75},
  {position: 2, team: 'Manchester City', src: "../../../assets/city.jpg/", played: 31, wins: 22, draws: 4, losses: 4, goalsFor: 81, goalsAgainst: 29, goalsDifference: 52, points: 73},
  {position: 3, team: 'Newcastle United', src: "../../../assets/newcastle.jpg/", played: 31, wins: 16, draws: 11, losses: 4, goalsFor: 54, goalsAgainst: 25, goalsDifference: 29, points: 59},
  {position: 4, team: 'Manchester United', src: "../../../assets/united.jpg/", played: 30, wins: 18, draws: 5, losses: 7, goalsFor: 46, goalsAgainst: 37, goalsDifference: 9, points: 59},
  {position: 5, team: 'Aston Villa', src: "../../../assets/aston.jpg/", played: 33, wins: 16, draws: 6, losses: 11, goalsFor: 46, goalsAgainst: 41, goalsDifference: 5, points: 54},
  {position: 6, team: 'Tottenham Hotspur', src: "../../../assets/tottenham.jpg/", played: 32, wins: 16, draws: 5, losses: 11, goalsFor: 58, goalsAgainst: 51, goalsDifference: 7, points: 53},
  {position: 7, team: 'Liverpool', src: "../../../assets/liverpool.jpg/", played: 31, wins: 14, draws: 8, losses: 9, goalsFor: 59, goalsAgainst: 38, goalsDifference: 21, points: 50},
  {position: 8, team: 'Brighton', src: "../../../assets/brighton.jpg/" , played: 29, wins: 14, draws: 7, losses: 8, goalsFor: 54, goalsAgainst: 37, goalsDifference: 17, points: 49},
  {position: 9, team: 'Fulham', src: "../../../assets/fulham.jpg/", played: 32, wins: 13, draws: 6, losses: 13, goalsFor: 44, goalsAgainst: 43, goalsDifference: 1, points: 45},
  {position: 10, team: 'Brentford', src: "../../../assets/brentford.jpg/", played: 32, wins: 10, draws: 14, losses: 8, goalsFor: 48, goalsAgainst: 43, goalsDifference: 5, points: 44},
];

@Component({
  selector: 'app-english-premier-league',
  templateUrl: 'english-premier-league.component.html',
  styleUrls: ['english-premier-league.component.scss']
})
export class EnglishPremierLeagueComponent {
  displayedColumns: string[] = ['position', 'team', 'played', 'wins', 'draws', 'losses',
  'goalsFor', 'goalsAgainst', 'goalsDifference', 'points'];
  dataSource = new ExampleDataSource();

}



export class ExampleDataSource extends DataSource<PeriodicElement> {
  /** Stream of data that is provided to the table. */
  data = new BehaviorSubject<PeriodicElement[]>(ELEMENT_DATA);

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<PeriodicElement[]> {
    return this.data;
  }

  disconnect() {}
}
