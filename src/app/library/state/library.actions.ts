import { createAction, props } from '@ngrx/store';
import { Book } from './../models/book';

export const addBook = createAction(
  '[Book Form] Create book',
  props<{ book: Book }>()
);

export const removeBook = createAction(
  '[Library Page] Remove book',
  props<{ book: Book }>()
);

export const updateBook = createAction(
  '[Book Form] Update book',
  props<{ book: Book }>()
);

export const loadBooks = createAction('[Library Page] Load books');
export const loadBooksSuccess = createAction(
  '[Library Page] Load books success',
  props<{ books: Book[] }>()
);
export const loadBooksError = createAction(
  '[Library Page] Load books error',
  props<{ error: string }>()
);
