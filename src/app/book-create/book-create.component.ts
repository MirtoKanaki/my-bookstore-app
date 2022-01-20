import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BookstoreService } from '../services/bookstore-service.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {
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
    private _router: Router) {}

  ngOnInit(): void {}

  back() {
    this._router.navigate(['book-list']);
  }

  save() {
    this._bookstoreSvc.create(this.bookForm.value)
  }

}


