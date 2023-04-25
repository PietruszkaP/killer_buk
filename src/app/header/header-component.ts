import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ButtonMode } from "../shared/enums/button-mode.enum";

@Component({
    selector: 'app-header',
    templateUrl: 'header-component.html',
    styleUrls: ['header-component.scss']
})
export class HeaderComponent {
    public buttonMode = ButtonMode;

    options = [
        {name: 'English', value: 'en', src:'../../../assets/english.jpg/'},
        {name: 'Deutsch', value: 'de', src:'../../../assets/deutsch.jpg/'},
        {name: 'Frencis', value: 'fe', src:'../../../assets/francis.jpg/'},
        {name: 'Polski', value: 'pl', src:'../../../assets/polski.jpg/'},
        {name: 'Italian', value: 'it', src:'../../../assets/italian.jpg/'},
    ]

    constructor(private _router: Router) {
    }

    register(): void {
        this._router.navigate(['/register']);
    }

    login(): void {
        this._router.navigate(['/login']);
    }
}