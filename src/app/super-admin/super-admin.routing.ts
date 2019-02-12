import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperAdminComponent } from './super-admin.component';
import { SuperAdminDashboardComponent } from './dashboard/super-admin-dashboard.component';
import { DivisionManagementComponent } from './division-management/division-management.component';
import { HoIdManagementComponent } from './ho-id-management/ho-id-management.component';
import { MenuRightsManagementComponent } from './menu-rights-management/menu-rights-management.component';
import { StateLocationManagementComponent } from './state-location-management/state-location-management.component';
import { FeedbackFormViewComponent } from './feedback-form-view/feedback-form-view.component';
import { DivisionTransferComponent } from './division-transfer/division-transfer.component';

const superAdminRoutes: Routes = [
  {
    path: '',
    component: SuperAdminComponent,
    children: [
      { path: 'dashboard', component: SuperAdminDashboardComponent },
      { path: 'division-management', component: DivisionManagementComponent },
      { path: 'state-location-management', component: StateLocationManagementComponent },
      { path: 'division-transfer', component: DivisionTransferComponent },
      { path: 'ho-id-management', component: HoIdManagementComponent },
      { path: 'menu-rights-management', component: MenuRightsManagementComponent },
      { path: 'feedback-form-view', component: FeedbackFormViewComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(superAdminRoutes)],
  exports: [RouterModule]
})

export class SuperAdminRoutingModule {

}
