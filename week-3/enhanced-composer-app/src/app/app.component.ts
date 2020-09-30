//=========================================
// Title: app.component.ts
// Author: Professor Krasso
// Date: 9/29/20
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
  assignment: string = 'Exercise 3.2 - Passing Data to Routes, Part 1';
}
