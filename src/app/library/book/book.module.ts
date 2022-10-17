import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { BookComponent } from './book.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const COMPONENTS = [BookComponent];

@NgModule({
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule, MatProgressSpinnerModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class BookModule {}
