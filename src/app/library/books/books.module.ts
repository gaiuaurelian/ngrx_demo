import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { BooksComponent } from './books.component';

const COMPONENTS = [BooksComponent];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class BooksModule {}
