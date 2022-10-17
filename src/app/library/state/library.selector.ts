import { createSelector } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { LibraryState, LibraryStatusEnum } from './library.reducer';

export const selectBooks = (state: AppState) => state.library;
export const selectAllBooks = createSelector(
  selectBooks,
  (state: LibraryState) => state.books
);
export const countBooks = createSelector(
  selectBooks,
  (state: LibraryState) => state.books.length
);

export const isListCurrentlyLoading = createSelector(
  selectBooks,
  (state: LibraryState) =>
    state.status === LibraryStatusEnum.LOADING ? true : false
);
