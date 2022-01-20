import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared/shared.module';
import { BookCreateComponent } from './book-create.component';
import { BookCreateRoutingModule } from './book-create-routing.module';

@NgModule({
  declarations: [BookCreateComponent],
  imports: [
    CommonModule,
    SharedModule,
    BookCreateRoutingModule
  ]
})
export class BookCreateModule { }
