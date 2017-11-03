import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './core/security/auth-guard.service';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './core/pages/page-not-found.component';
 
const routes: Routes = [
  {
    path: 'post',
    loadChildren: 'app/post/post.module#PostModule',
    canLoad: [AuthGuardService]
  },
  { 
    path: '', 
    component: HomeComponent,
    canActivate: [AuthGuardService] 
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}