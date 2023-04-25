import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-statistics',
    templateUrl: './statistics.component.html',
    styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {

    constructor(private _router: Router, private _activatedRoute: ActivatedRoute) {
        
    }

    navigate(): void {
        this._router.navigate(['dupa'], {relativeTo: this._activatedRoute});
    }
}