import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    imports: [
        CommonModule,
        HttpModule
    ],
    exports: [
        SidebarComponent
    ],
    providers: [

    ],
    declarations: [
        SidebarComponent
    ]
})
export class CoreModule {}
