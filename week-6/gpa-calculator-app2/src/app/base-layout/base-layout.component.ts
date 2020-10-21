/*======================================
; Title: base-layout.component.ts
; Author: Professor Krasso
; Date: 10/20/20
; Modified By: Rochelle Markham
; Description: gpa-calculator-app
======================================*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor() {
    this.assignment = "Assignment 6.4 - Input Properties";
  }

  ngOnInit(): void {
  }

}
