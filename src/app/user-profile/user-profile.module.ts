import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UserProfileRoutingModule } from './user-profile.routing.module';
import { UserProfileComponent } from './user-profile.component';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        ReactiveFormsModule,
        UserProfileRoutingModule
    ],
    exports: [
        UserProfileComponent
    ],
    providers: [

    ],
    declarations: [
        UserProfileComponent
    ]
})
export class UserProfileModule {}
