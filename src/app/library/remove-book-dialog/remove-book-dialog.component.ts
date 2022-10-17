import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from '../models/book';

@Component({
  selector: 'app-remove-book-dialog',
  templateUrl: './remove-book-dialog.component.html',
  styleUrls: ['./remove-book-dialog.component.css'],
})
export class RemoveBookDialogComponent implements OnInit {
  book: Book;
  constructor(@Inject(MAT_DIALOG_DATA) data: Book) {
    this.book = data;
  }

  ngOnInit() {}
}
