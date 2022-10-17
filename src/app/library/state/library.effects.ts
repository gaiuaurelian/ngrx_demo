import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { ofType } from '@ngrx/effects';
import { createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { BooksService } from '../services/books.service';
import { Book } from '../models/book';
import {
  addBook,
  loadBooks,
  loadBooksError,
  loadBooksSuccess,
  removeBook,
  updateBook,
} from './library.actions';
import { AppState } from './../../state/app.state';
import { MatDialog } from '@angular/material/dialog';
import { RemoveBookDialogComponent } from '../remove-book-dialog/remove-book-dialog.component';

@Injectable()
export class LibraryEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<AppState>,
    private readonly booksService: BooksService,
    private readonly dialog: MatDialog
  ) {}

  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBooks),
      switchMap(() =>
        this.booksService.getAllBooks().pipe(
          map((books: Book[]) => {
            return loadBooksSuccess({ books: books });
          }),
          catchError((error) => of(loadBooksError({ error: error })))
        )
      )
    )
  );

  saveBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addBook),
      switchMap((action) => {
        return this.booksService
          .saveBook(action.book)
          .pipe(switchMap(() => this.booksService.getAllBooks()));
      }),
      map((books) => loadBooksSuccess({ books: books })),
      catchError((error) => of(loadBooksError({ error: error })))
    )
  );

  updateBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateBook),
      switchMap((action) => {
        return this.booksService
          .updateBook(action.book.id, action.book)
          .pipe(switchMap(() => this.booksService.getAllBooks()));
      }),
      map((books: Book[]) => loadBooksSuccess({ books: books })),
      catchError((error) => of(loadBooksError({ error: error })))
    )
  );

  removeBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeBook),
      switchMap((action) =>
        this.dialog
          .open(RemoveBookDialogComponent, { data: action.book })
          .afterClosed()
          .pipe(
            switchMap((response: boolean) => {
              if (response) {
                return this.booksService.removeBook(action.book.id);
              }
            }),
            switchMap((response) => this.booksService.getAllBooks())
          )
      ),
      map((books: Book[]) => loadBooksSuccess({ books: books })),
      catchError((error) => of(loadBooksError({ error: error })))
    )
  );
}
