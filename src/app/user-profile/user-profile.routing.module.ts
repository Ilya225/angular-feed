import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserProfileComponent } from './user-profile.component';

const userProfileRoutes: Routes = [
    { 
        path: 'user/profile',
        component: UserProfileComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(userProfileRoutes)
      ],
      exports: [
        RouterModule
      ]
})
export class UserProfileRoutingModule {}