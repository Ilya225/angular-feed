import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
 
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'post',
    loadChildren: 'app/post/post.module#PostModule'
  }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}