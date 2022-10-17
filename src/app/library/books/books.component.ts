import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { loadBooks, removeBook } from '../state/library.actions';
import {
  countBooks,
  isListCurrentlyLoading,
  selectAllBooks,
} from '../state/library.selector';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books$: Observable<Book[]> = this.store.select(selectAllBooks);
  booksCount$: Observable<number> = this.store.select(countBooks);
  isLoading$: Observable<boolean> = this.store.select(isListCurrentlyLoading);

  constructor(
    // private readonly http: HttpClient,
    private readonly store: Store
  ) {}

  ngOnInit() {
    this.store.dispatch(loadBooks());
    // this.http.get('/api/books').subscribe(console.log);
  }

  onRemove(book: Book) {
    this.store.dispatch(removeBook({ book: book }));
  }
}
