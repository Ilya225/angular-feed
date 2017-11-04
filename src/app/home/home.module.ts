import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HomeRoutingModule } from './home-routing.module';

import { HomeFeedComponent } from './home-feed.component';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        HomeRoutingModule
    ],
    exports: [
        
    ],
    declarations: [
        HomeComponent,
        HomeFeedComponent
    ],
    providers: [

    ]
})
export class HomeModule {}