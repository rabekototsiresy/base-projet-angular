import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

import { RouterModule } from '@angular/router';
import { BreadcumbComponent } from './components/breadcumb/breadcumb.component';
import { BootstrapModule } from '../bootstrap/bootstrap.module';
import { WrapperComponent } from './wrapper/wrapper.component';
import { WrapperContentComponent } from './wrapper-content/wrapper-content.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    WrapperComponent,
    WrapperContentComponent,
    BreadcumbComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    BootstrapModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    WrapperComponent,
    WrapperContentComponent,

  ]

})
export class LayoutsModule { }
