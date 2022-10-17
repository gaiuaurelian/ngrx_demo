import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { countBooks } from './state/library.selector';

@Component({
  selector: 'app-library',
  templateUrl: 'library.component.html',
})
export class LibraryComponent {
  booksCount$: Observable<number> = this.store.select(countBooks);
  editPageOpened;
  constructor(private readonly store: Store) {}
}
