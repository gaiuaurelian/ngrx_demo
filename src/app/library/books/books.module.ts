import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { RemoveBookDialogModule } from '../remove-book-dialog/remove-book-dialog.module';
import { BooksComponent } from './books.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const COMPONENTS = [BooksComponent];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    RemoveBookDialogModule,
    MatProgressBarModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class BooksModule {}
