//=========================================
// Title: composer-list.component.ts
// Author: Professor Krasso
// Date: 9/19/20
// Modified by: Rochelle Markham
// Description: composer application
//=========================================

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class'

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;

  constructor() {
   this.composers = new Composer().getComposers();
  }
  ngOnInit(): void {
  }

}
