import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { BookFormModule } from './book-form/book-form.module';
import { BookModule } from './book/book.module';
import { BooksModule } from './books/books.module';
import { LibraryComponent } from './library.component';

const COMPONENTS = [LibraryComponent];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    BooksModule,
    BookModule,
    BookFormModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class LibraryModule {}
