import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BooksService } from '../books/books.service';
import { Book } from '../models/book';
import { addBook, updateBook } from '../state/library.actions';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent implements OnInit {
  private bookId: number;

  createBook = true;

  titleFormControl = new FormControl<string>('');
  descriptionFormControl = new FormControl<string>('');
  publishDateFormControl = new FormControl<Date>(new Date());
  coverUrlFormControl = new FormControl<string>('');
  authorsFormArray = new FormArray([]);

  bookForm = new FormGroup({
    title: this.titleFormControl,
    description: this.descriptionFormControl,
    date: this.publishDateFormControl,
    cover: this.coverUrlFormControl,
    authors: this.authorsFormArray,
  });

  constructor(
    private readonly route: ActivatedRoute,
    private readonly booksService: BooksService,
    private readonly store: Store,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.createBook = this.route.snapshot.data.type === 'create';
    this.bookId = this.createBook ? 0 : this.route.snapshot.params.id;

    if (!this.createBook) {
      this.booksService.getById(this.bookId).subscribe((response) => {
        this.titleFormControl.setValue(response.title);
        this.descriptionFormControl.setValue(response.description);
        this.publishDateFormControl.setValue(response.date);
        this.coverUrlFormControl.setValue(response.imageUrl);

        for (let author of response.authors) {
          const auhtorFormControl = new FormControl(author.name);
          this.authorsFormArray.push(auhtorFormControl);
        }
      });
    }
  }

  onSave() {
    const newBook: Book = {
      id: this.bookId,
      title: this.bookForm.value.title,
      authors: this.bookForm.value.authors,
      description: this.bookForm.value.description,
      imageUrl: this.bookForm.value.cover,
      date: this.bookForm.value.date,
    };

    if (this.createBook) {
      this.store.dispatch(addBook({ book: newBook }));
    } else {
      this.store.dispatch(updateBook({ book: newBook }));
    }
    this.router.navigate(['/books']);
  }
}
