import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post/post-detail.component';
import { PostCreateComponent } from './post/post-create.component';
import { PostCategoryComponent } from './post_category/post-category.component';
import { PostCategoryCreateComponent } from './post_category/post-category-create.component';
 
const routes: Routes = [
  { path: 'posts', component: PostComponent },
  { path: 'post/create', component: PostCreateComponent},
  { path: 'post-detail/:postId', component: PostDetailComponent},
  { path: 'post-category', component: PostCategoryComponent },
  { path: 'post-category/create', component: PostCategoryCreateComponent }
  
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}