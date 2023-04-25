import { Component, Input } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

export interface Language {
    name: string;
    value: string;
    src: string;
}

@Component({
    selector: 'app-drop-down-menu',
    templateUrl: './drop-down-menu.component.html',
    styleUrls: ['./drop-down-menu.component.scss']
})
export class DropDownMenuComponent {
    @Input() selectedOption: Language | null = null;
    @Input() options: Language[] = [];
    isDropdownOpen = false;

    constructor(private _translateSerive: TranslateService) {

    }

    openDropdown(): void {
        this.isDropdownOpen = true;
    }

    clickedOutside(): void {
        this.isDropdownOpen = false;
    }

    setLanguage(language: string): void {
        this._translateSerive.use(language);
        this.selectedOption = this.options.filter(o => o.value === language)[0];
        this.isDropdownOpen = false;
    }

    test(): void {
        console.log('DUPAAAA');
    }
}