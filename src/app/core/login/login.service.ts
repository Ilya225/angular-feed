import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { LoginForm } from './login-form';

import { API_BASE_URL } from '../../app.config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(
        private http: Http
    ) {}

    login(loginForm: LoginForm) :Promise<any> {
        return this.http.post(
            `${API_BASE_URL}/login`, 
            JSON.stringify(loginForm), 
            { headers: this.headers })
            .toPromise()
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }
}