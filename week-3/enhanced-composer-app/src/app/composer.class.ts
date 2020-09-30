//=========================================
// Title: composer.class.ts
// Author: Professor Krasso
// Date: 9/29/20
// Modified by: Rochelle Markham
// Description: composer application
//=========================================

import { IComposer } from './composer.interface';

export class Composer{
  composers: Array<IComposer>;

  constructor(){
    this.composers= [
      {
        composerId: 100, fullName: "Stephen Sondheim", genre: "musical theatre"
      },
      {
        composerId: 101, fullName: "Andrew Lloyd Webber", genre: "musical theatre"
      },
      {
        composerId: 102, fullName: "Clara Schumann", genre: "classical"
      },
      {
        composerId: 103, fullName: "James Roy Horner", genre: "film music"
      },
      {
        composerId: 104, fullName: "Teresa Carreño", genre: "classical"
      }
    ]
  }

  getComposers(){
    return this.composers;
  }

  getComposer(composerId: number){
    for (let composer of this.composers){
      if(composer.composerId === composerId){
        return composer;
      }
    }
  }

}

