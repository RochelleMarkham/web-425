/*======================================
; Title: app.component.ts
; Author: Professor Krasso
; Date: 10/19/20
; Modified By: Rochelle Markham
; Description: In-n-out-books app
======================================*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string;

  constructor() {
    this.assignment = "Exercise 6.2 - Input/Output Properties, Part 1";
  }
}
