import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperContentComponent } from './shared/modules/layouts/wrapper-content/wrapper-content.component';
import { WrapperComponent } from './shared/modules/layouts/wrapper/wrapper.component';
import { NotFound404Component } from './shared/pages/not-found404/not-found404.component';


const routes: Routes = [
  {
    path: 'app',
    component: WrapperComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'v1',
        component: WrapperContentComponent,
        children: [
          {
            path: 'dashboard',
            loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
          }
        ]
      },

    ]
  },
  {
      path: '',
      redirectTo: '/app/auth/login',
      pathMatch: 'full'
  },
  {
    path: '**', pathMatch: 'full',
    component: NotFound404Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
