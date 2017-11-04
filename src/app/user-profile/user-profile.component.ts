import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'user-profile',
    templateUrl: 'user-profile.component.html'
})
export class UserProfileComponent {

    userProfileForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    createForm() {
        this.userProfileForm = this.fb.group({
            firstname: ['' ],
            lastname: [''],
            phone: [''],
            avatar: ['']
        })
    }

    onChangeFile(event) {
        console.log(event.target.files);
        let reader = new FileReader();
        if(event.target.files && event.target.files.length > 0) {
          let file = event.target.files[0];
          reader.readAsDataURL(file);
          reader.onload = (payload) => {
              console.log(payload);
            /*this.userProfileForm.get('avatar').setValue({
              filename: file.name,
              filetype: file.type,
              value: reader.result.split(',')[1]
            })*/
          };
        }
    }

    clickHandler() {
        console.log(this.userProfileForm.value);
    }
}