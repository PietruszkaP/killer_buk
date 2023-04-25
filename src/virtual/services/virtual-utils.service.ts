import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class VirtualUtilsService {
    isShowBetslip = new BehaviorSubject<boolean>(false);

    constructor() {
    }

    showBetSlip(open: boolean): void {
        this.isShowBetslip.next(open);
    }
    
}