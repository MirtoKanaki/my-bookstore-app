import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';

const routes: Routes = [
  { path: 'book-list', component: BookListComponent },
  { 
    path: 'book-view',
    loadChildren: () => import('./book-view/book-view.module').then((m) => m.BookViewModule) 
  },
  { 
    path: 'book-create',
    loadChildren: () => import('./book-create/book-create.module').then((m) => m.BookCreateModule) 
  },
  { path: '**', redirectTo: '/book-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
