import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CoreRoutingModule } from './core-routing.module';

import { LoginService } from './login/login.service';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        CoreRoutingModule
    ],
    exports: [
        SidebarComponent,
        LoginComponent
    ],
    providers: [
        LoginService
    ],
    declarations: [
        SidebarComponent,
        LoginComponent
    ]
})
export class CoreModule {}
