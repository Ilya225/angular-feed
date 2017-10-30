import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PostModule } from './post/post.module';
import { CoreModule } from './core/core.module';
import { UserProfileModule } from './user-profile/user-profile.module';

import { HomeComponent } from './home/home.component';
import { LoginService } from './login/login.service';
import { LoginComponent } from './login/login.component';

import { AppComponent } from './app.component';

import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    PostModule,
    CoreModule,
    UserProfileModule
  ],
  providers: [
    LoginService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
