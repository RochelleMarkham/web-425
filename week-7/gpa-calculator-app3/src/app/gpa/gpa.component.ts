/*======================================
; Title: gpa.component.ts
; Author: Professor Krasso
; Date: 10/20/20
; Modified By: Rochelle Markham
; Description: gpa-calculator-app
======================================*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {

  @Input() gpaTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
