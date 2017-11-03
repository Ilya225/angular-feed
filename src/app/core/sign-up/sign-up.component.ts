import { Component } from '@angular/core';
import { SignUpForm } from './sign-up-form';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'signup',
    templateUrl: './sign-up.component.html',
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

    createForm() {
        this.signupForm = this.fb.group({
            username: [ '', Validators.required ],
            email: '',
            password: '',
            confirm: ''
        })
    }

    clickHandler() {
        console.log(this.signupForm.value);
        console.log(this.signupForm.status);
    }

}