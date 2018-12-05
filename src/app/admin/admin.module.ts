import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing'
import { AdminComponent } from './admin.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SidebarNavComponent } from '../shared/sidebar-nav/sidebar-nav.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard.component';

@NgModule({
    declarations: [
        AdminComponent,
        HeaderComponent,
        SidebarNavComponent,
        AdminDashboardComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    providers: [],
    bootstrap: [AdminComponent]
})


export class AdminModule {}
