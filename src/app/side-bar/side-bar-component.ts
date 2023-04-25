import { Component } from "@angular/core";

export interface Gambler {
    id: number;
    name: string;
    score: number;
    nick: string;
}

export const gam = [
    {id: 114, name: 'Michal Piwowarczyk', score: 0, nick: 'Piwkoooooo'},
    {id: 11, name: 'Kuba Wolczynski', score: 1345, nick: 'Serek'},
    {id: 224, name: 'Karol Gala', score: 22, nick: 'Maki'},
    {id: 244, name: 'Jacek Ochnio', score: 33, nick: 'Kielbasa'},
    {id: 1, name: 'Grzegorz Pietruszka', score: 2345, nick: 'Gelko'},
    {id: 3, name: 'Bartek Sadkowski', score: 2103, nick: 'Sadu'},
    {id: 4, name: 'Pawel Szymczak', score: 2045, nick: 'Jack_Strong'},
    {id: 107, name: 'Kamil Koszalka', score: -45, nick: 'Koszalka'},
    {id: 14, name: 'Bartek Kiwior', score: 1786, nick: 'Kiwior'},
    {id: 6, name: 'Patryk Pietruszka', score: 1845, nick: 'Kosian'},
    {id: 7, name: 'Ewelina Glowacz', score: -1677, nick: 'Glowa'},
    {id: 66, name: 'Martyna Grzywacz', score: -60, nick: 'Margotka'},
    {id: 33, name: 'Sylwia Broniszewska', score: 5, nick: 'Sylwia_dancer'},
    {id: 18, name: 'Oktawian Wawrenczyk', score: 1211, nick: 'Oktawion'},
    {id: 36, name: 'Jakub Szelag', score: -100, nick: 'Lysy'},
    {id: 43, name: 'Dariusz Banasik', score: -200, nick: 'Zwolniony'},
    {id: 58, name: 'Piotr Okonski', score: -121, nick: 'Okon'},
    {id: 67, name: 'Jakub Sadkowski', score: -453, nick: 'Bubek'},
    {id: 36, name: 'Paulina Zielinska', score: -3250, nick: 'Paula'},
    {id: 19, name: 'Sebastian Waga', score: 845, nick: 'Waga'},
]

@Component({
    selector: 'app-side-bar',
    templateUrl: 'side-bar-component.html',
    styleUrls: ['./side-bar-component.scss'],
})
export class SideBarComponent {
    public readonly gamblers: Gambler[] = [];

    constructor() {
        this.gamblers = gam.sort((a,b) => b.score - a.score);
        // .filter((gambler, i) => i < 15);
    }
    
}