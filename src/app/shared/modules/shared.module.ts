import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { TranslateModule } from "@ngx-translate/core";
import { BetSlipComponent } from "../components/bet-slip/bet-slip.component";
import { ButtonComponent } from "../components/button/button-component";
import { DropDownMenuComponent } from "../components/drop-down-menu/drop-down-menu.component";
import { InputComponent } from "../components/input/input.component";
import { SliderComponent } from "../components/slider/slider-component";
import { ClickOutsideDirective } from "../directives/click-outside.directive";


@NgModule({
    declarations: [
        ButtonComponent,
        SliderComponent,
        InputComponent,
        BetSlipComponent,
        DropDownMenuComponent,
        ClickOutsideDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        TranslateModule,
        ReactiveFormsModule
    ],
    exports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonComponent,
        SliderComponent,
        InputComponent,
        BetSlipComponent,
        TranslateModule,
        DropDownMenuComponent,
        ClickOutsideDirective
    ]
})
export class SharedModule {}