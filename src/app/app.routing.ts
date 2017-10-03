import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

// Import Containers
import {
  FullLayout,
  SimpleLayout
} from './containers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: SimpleLayout,
    loadChildren: './views/login/login.module#LoginModule'
  },
  {
    path: 'register',
    component: SimpleLayout,
    loadChildren: './views/register/register.module#RegisterModule'
  },
  {
    path: '',
    component: FullLayout,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },

      // hafidz : add here [START]
      {
        path: 'login',
        loadChildren: './views/login/login.module#LoginModule'
      },
      {
        path: 'register',
        loadChildren: './views/register/register.module#RegisterModule'
      },
      {
        path: 'profile',
        loadChildren: './views/resident/profile/profile.module#ProfileModule'
      },
      {
        path: 'guest-register',
        loadChildren: './views/resident/guest-register/guest.register.module#GuestRegisterModule'
      },
      {
        path: 'management-activity',
        loadChildren: './views/management/activity/management.activity.module#ManagementActivityModule'
      },
      {
        path: 'responsive',
        loadChildren: './views/demo/responsive/responsive.module#ResponsiveModule'
      },
      {
        path: 'selection',
        loadChildren: './views/demo/selection/selection.module#SelectionModule'
      },
      {
        path: 'charting',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      },
      {
        path: 'table',
        loadChildren: './views/demo/table/table.module#TableModule'
      },
      {
        path: 'time',
        loadChildren: './views/time/time.module#TimeModule'
      },
      {
        path: 'dynamic',
        loadChildren: './templates/dynamic/dynamic.module#DynamicModule'
      },
      {
        path: '',
        loadChildren: './views/product/product.module#ProductModule'
      }
      // hafidz : add here [END]

    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
