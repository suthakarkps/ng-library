import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SidebarNavComponent } from '../shared/sidebar-nav/sidebar-nav.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    HeaderComponent,
    SidebarNavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent,
    HeaderComponent,
    SidebarNavComponent
  ]
})

export class SharedModule { }
