import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post/post-detail.component';
import { PostCreateComponent } from './post/post-create.component';
 
const routes: Routes = [
  { path: 'posts', component: PostComponent },
  { path: 'post/create', component: PostCreateComponent},
  { path: 'post-detail/:postId', component: PostDetailComponent},
  
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}