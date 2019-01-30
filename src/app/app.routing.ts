import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperAdminModule } from './super-admin/super-admin.module';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'super-admin', loadChildren: () => SuperAdminModule
  },
  {
    path: 'admin', loadChildren: () => AdminModule
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
