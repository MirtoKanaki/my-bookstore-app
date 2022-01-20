import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Book } from '../model/book';
import { BookstoreService } from '../services/bookstore-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {
  books: Book[] = [];
  booksList$ = new Observable<Book[]>();
  search = '';

  constructor(private _bookstoreSvc: BookstoreService, private _router: Router) { }

  ngOnInit(): void {
    this.intializeBooksListFromJson();
    this.search = ''
  }

  private intializeBooksListFromJson() {
    this.booksList$ = this._bookstoreSvc.booksList$;
  }

  newBook() {
    this._router.navigate(['book-create']);
  }

  filterBooksList() {
    this._bookstoreSvc.filterBooksList(this.search);
  }

  clearSearch() {
    this.search = '';
    this.intializeBooksListFromJson();
  }

  bookView(isbn: string) {
    this._router.navigate(['book-view'])

    this.booksList$.pipe(
      map(list => list.find(x => x.isbn === isbn)),
      tap(res => {
        if (res != undefined) {
          const book: Book = {
            isbn: res.isbn,
            title: res.title,
            author: res.author,
            published: res.published,
            publisher: res.publisher,
            pages: res.pages,
            subtitle: res.subtitle,
            description: res.description,
            website: res.website
          }
          this._bookstoreSvc.selectBook(book);
        }
      })
    ).subscribe();
    
  }

  ngOnDestroy() {}
}
