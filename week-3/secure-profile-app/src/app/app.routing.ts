/*=======================================
/ Title: app.routing.ts
/ Author: Professor Krasso
/ Date: 9/29/20
/ Modified by: Rochelle Markham
/ Description: profile app
=======================================*/

import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
]
