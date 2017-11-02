import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostComponent } from './post.component';
import { PostDetailComponent } from './post-detail.component';
import { PostCreateComponent } from './post-create.component';
import { PostCategoryComponent } from './post_category/post-category.component';
import { PostCategoryCreateComponent } from './post_category/post-category-create.component';

const postRoutes: Routes = [
  {
    path: '',
    children: [
      { path: 'list', component: PostComponent },
      { path: 'create', component: PostCreateComponent},
      { path: 'post-detail/:postId', component: PostDetailComponent},
      { path: 'post-category', component: PostCategoryComponent },
      { path: 'post-category/create', component: PostCategoryCreateComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(postRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PostRoutingModule { }