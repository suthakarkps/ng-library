import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { AppRoutingModule } from './app.routing';
import { AppGuardService, SuperAdminGuard } from './app.guard';

import { SharedModule } from './shared/shared.module';

import { SharedService } from './shared/shared.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    MessageService,
    AppGuardService,
    SuperAdminGuard,
    SharedService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
