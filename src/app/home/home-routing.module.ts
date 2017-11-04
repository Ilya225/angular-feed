import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeFeedComponent } from './home-feed.component';

const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent,
        children: [
          {
            path: '',
            component: HomeFeedComponent
          },
          {
            path: 'top',
            component: HomeFeedComponent
          },
          {
            path: 'all',
            component: HomeFeedComponent
          }
        ]
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule {}