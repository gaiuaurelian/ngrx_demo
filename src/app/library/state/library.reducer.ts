import { createReducer, on } from '@ngrx/store';
import { Book } from '../models/book';
import {
  loadBooks,
  loadBooksError,
  loadBooksSuccess,
  addBook,
  removeBook,
} from './library.actions';

export enum LibraryStatusEnum {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
  PENDING = 'pending',
}

export type LibraryStatus =
  | LibraryStatusEnum.ERROR
  | LibraryStatusEnum.SUCCESS
  | LibraryStatusEnum.LOADING
  | LibraryStatusEnum.PENDING;

export interface LibraryState {
  books: Book[];
  error: string | null;
  status: LibraryStatus;
}

export const initialState: LibraryState = {
  books: [],
  error: null,
  status: LibraryStatusEnum.PENDING,
};

export const libraryReducer = createReducer(
  initialState,
  on(loadBooks, (state) => ({ ...state, status: LibraryStatusEnum.LOADING })),
  on(loadBooksSuccess, (state, { books }) => ({
    ...state,
    books: [...books],
    error: null,
    status: LibraryStatusEnum.SUCCESS,
  })),
  on(loadBooksError, (state, { error }) => ({
    ...state,
    error: error,
    status: LibraryStatusEnum.ERROR,
  })),
  on(addBook, (state) => ({ ...state, status: LibraryStatusEnum.LOADING })),
  on(removeBook, (state) => ({ ...state, status: LibraryStatusEnum.PENDING }))
);
