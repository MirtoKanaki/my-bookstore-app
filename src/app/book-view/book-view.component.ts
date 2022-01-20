import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { BookstoreService } from '../services/bookstore-service.service';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss']
})
export class BookViewComponent implements OnInit {
  bookForm = this._formBuilder.group({
    isbn: [''],
    title: [''],
    subtitle: [''],
    author: [''],
    published: [''],
    publisher: [''],
    pages: [''],
    description: [''],
    website: ['']
  });

  constructor(
    private _bookstoreSvc: BookstoreService,
    private _formBuilder: FormBuilder,
    private _router: Router) {
    
   }

  ngOnInit(): void {
    this._bookstoreSvc.bookSelected$.pipe(
      map(res => {
        debugger
        this.bookForm.controls['title'].setValue(res.title);
        this.bookForm.controls['subtitle'].setValue(res.subtitle);
        this.bookForm.controls['isbn'].setValue(res.isbn);
        this.bookForm.controls['published'].setValue(res.published);
        this.bookForm.controls['publisher'].setValue(res.publisher);
        this.bookForm.controls['website'].setValue(res.website);
        this.bookForm.controls['pages'].setValue(res.pages);
        this.bookForm.controls['author'].setValue(res.author);
        this.bookForm.controls['description'].setValue(res.description);
      })
    ).subscribe()
  }

  back() {
    this._router.navigate(['book-list']);
  }

}


