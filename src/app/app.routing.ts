import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperAdminModule } from './super-admin/super-admin.module';
import { SuperAdminGuard } from './app.guard';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {
    path: 'super-admin', loadChildren: () => SuperAdminModule, canActivate: [SuperAdminGuard]
  },
  {
    path: 'admin', loadChildren: () => AdminModule
  },
  {
    path: '', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
