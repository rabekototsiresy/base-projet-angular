import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapModule } from './modules/bootstrap/bootstrap.module';
import { NotFound404Component } from './pages/not-found404/not-found404.component';
import { ServerError500Component } from './pages/server-error500/server-error500.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { HttpService } from './core/services/http/http.service';
import { HttpClientModule } from '@angular/common/http';
import { LangComponent } from './components/lang/lang.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { WrapperComponent } from './layouts/wrapper/wrapper.component';
import { WrapperContentComponent } from './layouts/wrapper-content/wrapper-content.component';
import { BreadcumbComponent } from './components/breadcumb/breadcumb.component';



@NgModule({
  declarations: [
    NotFound404Component,
    ServerError500Component,
    ButtonComponent,
    LangComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    WrapperComponent,
    WrapperContentComponent,
    BreadcumbComponent,

  ],
  imports: [
    CommonModule,
    BootstrapModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NotFound404Component,
    ServerError500Component,
    BootstrapModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    LangComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    WrapperComponent,
    WrapperContentComponent,
    BreadcumbComponent,
    ButtonComponent

  ],
  providers: [
    HttpService
  ]

})
export class SharedModule { }
