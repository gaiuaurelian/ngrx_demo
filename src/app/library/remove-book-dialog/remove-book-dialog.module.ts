import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { RemoveBookDialogComponent } from './remove-book-dialog.component';

const COMPONENTS = [RemoveBookDialogComponent];

@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class RemoveBookDialogModule {}
