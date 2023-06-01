import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapModule } from './modules/bootstrap/bootstrap.module';
import { LayoutsModule } from './modules/layouts/layouts.module';
import { NotFound404Component } from './pages/not-found404/not-found404.component';
import { ServerError500Component } from './pages/server-error500/server-error500.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { HttpService } from './core/services/http/http.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    NotFound404Component,
    ServerError500Component,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    BootstrapModule,
    LayoutsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    NotFound404Component,
    ServerError500Component,
    BootstrapModule,
    LayoutsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    HttpService
  ]

})
export class SharedModule { }
