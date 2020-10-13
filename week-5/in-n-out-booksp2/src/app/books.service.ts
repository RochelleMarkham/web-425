/*======================================
; Title: books.service.ts
; Author: Professor Krasso
; Date: 10/10/20
; Modified By: Rochelle Markham
; Description: In-n-out-books app
======================================*/

import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook>;

  constructor() {
    this.books=[
      {
        isbn: '9781400033423',
        title: "Song of Solomon",
        description: "A coming-of-age story of a young African American man, struggling to find his identity and make his way in life.",
        numOfPages: 352,
        authors: ["Toni Morrison"]
      },
      {
        isbn: '9780316034111',
        title: "The Host",
        description: "Melanie is captured and her body is used as a host for a new 'soul'. When new souls are placed into bodies, the old soul is supposed to fade away, but Melanie isn't going to go without a fight",
        numOfPages: 1152,
        authors: ["Stephanie Meyer"]
      },
      {
        isbn: "9780811200615",
        title: "The Blood Oranges",
        description: "Two couples find themselves neighbors in the Italian countryside. They are instantly the best of friends, but love has other plans for them.",
        numOfPages: 284,
        authors: ["John Hawkes"]
      },
      {
        isbn: "9781101965122",
        title: "Rubyfruit Jungle",
        description: "A young adopted girl, Molly, finds her way through life. This is her story of growing up in a poor family, how she overcomes the odds and also discovers who she try is along the way",
        numOfPages: 240,
        authors: ["Rita Mae Brown"]
      },
      {
        isbn: "9780156028356",
        title: "The Color Purple",
        description: "Celie has been mistreated and abused by almost everyone in her life, except Shug. With help from Shug she is able to find her confidence, learn to love and get rid of the abusers in her life.",
        numOfPages: 300,
        authors: ["Alice Walker"]
      }
    ]
  }

  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
  }
}
