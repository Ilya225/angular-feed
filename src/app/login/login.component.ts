import { Component } from '@angular/core';
import { LoginForm } from './login-form';
import { LoginService } from './login.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {

    loginForm: LoginForm = new LoginForm();

    constructor(
        private loginService: LoginService
    ) {}

    login() {
        this.loginService.login(this.loginForm);
    }

}