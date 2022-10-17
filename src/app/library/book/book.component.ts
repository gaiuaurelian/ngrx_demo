import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BooksService } from '../books/books.service';
import { Book } from '../models/book';
import { selectBook } from '../state/library.selector';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  book$: Observable<Book | null>;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly booksService: BooksService
  ) {}

  ngOnInit() {
    const bookId = this.route.snapshot.params.id;
    this.book$ = this.booksService.getById(bookId);
  }
}
