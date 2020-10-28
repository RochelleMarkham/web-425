/*======================================
; Title: sign-in.guard.ts
; Author: Professor Krasso
; Date: 10/27/20
; Modified By: Rochelle Markham
; Description: gpa-calculator-app
======================================*/


import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  constructor(private router: Router, private cookieService: CookieService){}

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const sessionUser = this.cookieService.get('session_user');

    if (sessionUser) {
      return true;
    } else {
      this.router.navigate(['/session/sign-in']);
    }
  }
}
