import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChartModule } from 'angular2-highcharts';

import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';

import { AdminRoutingModule } from './admin.routing';

import { AdminComponent } from './admin.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SidebarNavComponent } from '../shared/sidebar-nav/sidebar-nav.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard.component';
import { AdminGridComponent } from './grid/admin-grid.component';


declare var require: any;

@NgModule({
    declarations: [
        AdminComponent,
        HeaderComponent,
        SidebarNavComponent,
        AdminDashboardComponent,
        AdminGridComponent
    ],
    imports: [
        CommonModule,
        FormsModule,        
        ChartModule.forRoot(
            require('highcharts'),
            require('highcharts/modules/exporting'),
            require('highcharts/highcharts-more'),
            require('highcharts/modules/solid-gauge')
        ),
        TableModule,
        DialogModule,
        AdminRoutingModule
    ],
    providers: [],
    bootstrap: [AdminComponent]
})

export class AdminModule { }
