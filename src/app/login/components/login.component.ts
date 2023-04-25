import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ButtonMode } from "src/app/shared/enums/button-mode.enum";

export interface LoginForm {
    name: FormControl<string | null>;
    password: FormControl<string | null>
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    loginForm: FormGroup<LoginForm>;
    public buttonMode = ButtonMode;

    constructor() {
        this.loginForm = this._buildForm();

    }
    
    private _buildForm(): FormGroup<LoginForm> {
        return new FormGroup({
            name: new FormControl<string | null>('test'),
            password: new FormControl<string | null>(''),
        })
    }
}