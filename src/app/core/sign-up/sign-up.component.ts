import { Component } from '@angular/core';
import { SignUpForm } from './sign-up-form';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'signup',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

    /*signupForm = new FormGroup({
        username: new FormControl(),
        email: new FormControl(),
        password: new FormControl(),
        confirm: new FormControl()
    });*/

    signupForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    passwordMatchValidator(f: FormGroup) {
        return f.get('password').value === f.get('confirm').value
            ? null : { 'mismatch': true };
    }

    createForm() {
        this.signupForm = this.fb.group({
            username: [ '', 
                [
                    Validators.required,
                    Validators.pattern(new RegExp(/^\S*$/))
                ] 
            ],
            email: [ '', 
                [
                    Validators.email,
                    Validators.required,
                ] 
            ],
            password: [ '',
                [
                    Validators.minLength(8)
                ]
            ],
            confirm: [ '',
                [
                    Validators.minLength(8)
                ]
            ],
        }, { validators: this.passwordMatchValidator })
    }

    get username() { return this.signupForm.get('username'); }

    get email() { return this.signupForm.get('email'); }

    get password() { return this.signupForm.get('password'); }

    get confirm() { return this.signupForm.get('confirm'); }

    clickHandler() {
        console.log(this.signupForm.value);
        console.log(this.signupForm.status);
    }

}