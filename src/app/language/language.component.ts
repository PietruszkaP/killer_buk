import { Component, EventEmitter, HostListener, Output } from "@angular/core";

export enum AvailableLanguages {
    'ENGLISH' = 'English',
    'POLISH' = 'Polski',
    'DEUTSCH' = 'Deutsch',
    'ESPANYOL' = 'Espanol',
    'FRANCAIS' = 'Francais',
    'ITALIAN' = 'Italian',
}

@Component({
    selector: 'app-language',
    templateUrl: './language.component.html',
    styleUrls: ['./language.component.scss']
})
export class LanguageComponent {
    public selectedLanguage = 'English'

    public availableLanguages = AvailableLanguages;

    @HostListener('window:click', ['$event']) clickedOut(event: any) {
        // console.log('CLicked out',event );
    } 

    @Output() openLanguageDialog = new EventEmitter<boolean>();
    isLanguageDialogOpen = false;

    constructor() {
    }

    test(): void {
        console.log('ddd')
        this.isLanguageDialogOpen = false;
    }

    openLanguageChoiceDialog(): void {
        this.isLanguageDialogOpen = true;
        // this.openLanguageDialog.emit(true);
    }

}