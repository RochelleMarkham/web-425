//=========================================
// Title: composer-list.component.ts
// Author: Professor Krasso
// Date: 10/3/20
// Modified by: Rochelle Markham
// Description: composer application
//=========================================

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Observable<IComposer[]>;
  txtSearchControl = new FormControl('');

  filterComposers(name: string){
    this.composers=this.composerService.filterComposers(name);
  }

  constructor(private composerService: ComposerService) {
    this.composers = composerService.getComposers();

    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val=>this.filterComposers(val));

  }
  ngOnInit(): void {
  }

}
