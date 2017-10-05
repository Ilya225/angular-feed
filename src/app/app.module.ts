import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostService } from './post/post.service';
import { PostComponent } from './post/post.component';
import { PostCreateComponent } from './post/post-create.component';
import { PostDetailComponent } from './post/post-detail.component';
import { PostCategoryComponent } from './post_category/post-category.component';
import { PostCategoryCreateComponent } from './post_category/post-category-create.component';
import { AppComponent } from './app.component';

import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PostComponent,
    PostCreateComponent,
    PostDetailComponent,
    PostCategoryComponent,
    PostCategoryCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
