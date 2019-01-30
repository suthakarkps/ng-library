import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChartModule } from 'angular2-highcharts';

import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MultiSelectModule } from 'primeng/multiselect';

import { SuperAdminRoutingModule } from './super-admin.routing';

import { SuperAdminComponent } from './super-admin.component';
import { SharedModule } from '../shared/shared.module';
import { SuperAdminDashboardComponent } from '../super-admin/dashboard/super-admin-dashboard.component';
import { DivisionManagementComponent } from '../super-admin/division-management/division-management.component';
import { HoIdManagementComponent } from '../super-admin/ho-id-management/ho-id-management.component';
import { MenuRightsManagementComponent } from '../super-admin/menu-rights-management/menu-rights-management.component';
import { StateLocationManagementComponent } from '../super-admin/state-location-management/state-location-management.component';
import { FeedbackFormViewComponent } from '../super-admin/feedback-form-view/feedback-form-view.component';
import { DivisionTransferComponent } from '../super-admin/division-transfer/division-transfer.component';

declare var require: any;

@NgModule({
  declarations: [
    SuperAdminComponent,
    SuperAdminDashboardComponent,
    DivisionManagementComponent,
    HoIdManagementComponent,
    MenuRightsManagementComponent,
    StateLocationManagementComponent,
    FeedbackFormViewComponent,
    DivisionTransferComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ChartModule.forRoot(
      require('highcharts'),
      require('highcharts/modules/exporting'),
      require('highcharts/highcharts-more'),
      require('highcharts/modules/solid-gauge')
    ),
    TableModule,
    DialogModule,
    TooltipModule,
    TreeModule,
    CalendarModule,
    FileUploadModule,
    DropdownModule,
    RadioButtonModule,
    MultiSelectModule,
    SuperAdminRoutingModule
  ],
  providers: [],
  bootstrap: [SuperAdminComponent]
})

export class SuperAdminModule { }
