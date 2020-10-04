//=========================================
// Title: composer.service.ts
// Author: Professor Krasso
// Date: 10/3/20
// Modified by: Rochelle Markham
// Description: composer application
//=========================================

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;

  constructor() {
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

  getComposers(): Observable<IComposer[]>{
    return of(this.composers);
  }

  getComposer(composerId: number){
    for (let composer of this.composers){
      if(composer.composerId === composerId){
        return composer;
      }
    }
  }

  filterComposers(name: string): Observable<IComposer[]>{
    return of(this.composers).pipe(map(composers=>composers.filter(composer=>composer.fullName.toLowerCase().indexOf(name)>-1)));
  }

}

