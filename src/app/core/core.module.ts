import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CoreRoutingModule } from './core-routing.module';

import { AuthGuardService } from './security/auth-guard.service';
import { LoginService } from './login/login.service';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageNotFoundComponent } from './pages/page-not-found.component';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        CoreRoutingModule
    ],
    exports: [
        SidebarComponent,
        LoginComponent
    ],
    providers: [
        LoginService,
        AuthGuardService
    ],
    declarations: [
        SignUpComponent,
        SidebarComponent,
        LoginComponent,
        PageNotFoundComponent
    ]
})
export class CoreModule {}
