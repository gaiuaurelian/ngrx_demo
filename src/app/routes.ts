import { Routes } from '@angular/router';
import { BookFormComponent } from './library/book-form/book-form.component';
import { BookComponent } from './library/book/book.component';
import { BooksComponent } from './library/books/books.component';
import { LibraryComponent } from './library/library.component';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full',
  },
  {
    path: 'books',
    component: LibraryComponent,
    children: [
      {
        path: '',
        component: BooksComponent,
      },
      {
        path: ':id',
        component: BookComponent,
      },
      {
        path: 'create/book',
        component: BookFormComponent,
        data: { type: 'create' },
      },
      {
        path: 'edit/:id',
        component: BookFormComponent,
        data: { type: 'edit' },
      },
    ],
  },
];
