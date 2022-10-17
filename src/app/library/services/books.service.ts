import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../models/book';
import { Book as BookPayload } from '../../../server/types';

@Injectable({ providedIn: 'root' })
export class BooksService {
  constructor(private readonly http: HttpClient) {}

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('/api/books').pipe(
      map((response: any) => {
        return response.books.map((book) => {
          return {
            id: book.id,
            title: book.title,
            authors: book.authors.map((author) => ({ name: author })),
            description: book.description,
            imageUrl: book.cover,
            date: new Date(book.date),
          };
        });
      })
    );
  }

  getById(id: number): Observable<Book> {
    return this.http.get<Book>(`/api/books/${id}`).pipe(
      map((response: any) => {
        return {
          id: response.book?.id,
          title: response.book?.title,
          authors: response.book?.authors.map((author) => ({ name: author })),
          description: response.book?.description,
          imageUrl: response.book?.cover,
          date: new Date(response.book?.date),
        } as Book;
      })
    );
  }

  saveBook(book: Book) {
    const bookRequest: BookPayload = {
      title: book.title,
      authors: book.authors.map((author) => author.name),
      description: book.description,
      cover: book.imageUrl,
      date: book.date.toISOString(),
    };
    return this.http.post<any>('/api/books', bookRequest);
  }

  removeBook(id: number) {
    return this.http.delete(`/api/books/${id}`);
  }

  updateBook(id: number, book: Book) {
    return this.http.put<any>(`/api/books/${id}`, book);
  }
}
