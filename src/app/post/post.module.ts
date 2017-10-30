import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PostRoutingModule } from './post-routing.module';
import { PostService } from './post.service';
import { PostComponent } from './post.component';
import { PostCreateComponent } from './post-create.component';
import { PostDetailComponent } from './post-detail.component';
import { PostCategoryComponent } from './post_category/post-category.component';
import { PostCategoryCreateComponent } from './post_category/post-category-create.component';


@NgModule({
    imports:      [ 
        CommonModule, 
        FormsModule, 
        HttpModule,
        PostRoutingModule
    ],
    declarations: [ 
        PostComponent,
        PostCreateComponent,
        PostDetailComponent,
        PostCategoryComponent,
        PostCategoryCreateComponent 
    ],
    exports:      [ PostComponent, PostCategoryComponent ],
    providers:    [ PostService ]
  
})
export class PostModule {}