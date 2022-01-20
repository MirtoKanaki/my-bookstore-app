import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared/shared.module';
import { BookViewComponent } from './book-view.component';
import { BookViewRoutingModule } from './book-view-routing.module';

@NgModule({
  declarations: [BookViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    BookViewRoutingModule
  ]
})
export class BookViewModule { }
