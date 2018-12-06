import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard.component';
import { AdminGridComponent } from './grid/admin-grid.component';

const adminRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: 'dashboard', component: AdminDashboardComponent },
            { path: 'grid', component: AdminGridComponent },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})

export class AdminRoutingModule {

}
