//=========================================
// Title: app.component.ts
// Author: Professor Krasso
// Date: 10/3/20
// Modified by: Rochelle Markham
// Description: composer application
//=========================================

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = 'Exercise 4.3 - Handling Events with Observables';
}
