import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../model/book';
import * as booksData from '../books.json';

@Injectable({
  providedIn: 'root'
})
export class BookstoreService {
  booksJson = (booksData as any).default;

  private _booksList = new BehaviorSubject<Book[]>([]);
  public readonly booksList$ = this._booksList.asObservable();

  private _bookSelected = new BehaviorSubject<Book>({
    isbn: '',
    title: '',
    author: '',
    published: '',
    publisher: '',
    pages: 0,
    subtitle: '',
    description: '',
    website: ''
  });
  public readonly bookSelected$ = this._bookSelected.asObservable();

  private books: Book[] = [];
  
  constructor() { 
    this.booksJson.books.forEach(book => {
      const bookObj: Book = {
        isbn: book.isbn,
        title: book.author,
        subtitle: book.subtitle,
        author: book.author,
        published: book.published,
        publisher: book.publisher,
        pages: book.pages,
        description: book.description,
        website: book.website
      };
      this.books.push(bookObj);
    });
    this._booksList.next(this.books);
  }

  selectBook(book: Book) {
    this._bookSelected.next(book);
  }

  create(item: Book) {
    this.books.push(item);
    this._booksList.next(Object.assign([], this.books));
  }

  filterBooksList(filter: string) {
    this.books = this.books.filter(x => x.title.toLowerCase().includes(filter.toLowerCase()));
    this._booksList.next(Object.assign([], this.books));
  }
}
