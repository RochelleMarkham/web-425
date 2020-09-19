//=========================================
// Title: composer-list.component.ts
// Author: Professor Krasso
// Date: 9/19/20
// Modified by: Rochelle Markham
// Description: composer application
//=========================================

import { Component, OnInit } from '@angular/core';

export default class Composer{
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string){
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<Composer>;


  constructor() {
    this.composers= [
      new Composer("Stephen Sondheim", "musical theatre"),
      new Composer("Andrew Lloyd Webber", "musical theatre"),
      new Composer("Clara Schumann", "classical"),
      new Composer("James Roy Horner", "film music"),
      new Composer("Teresa Carreño", "classical")
    ]
  }
  ngOnInit(): void {
  }

}
