import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { countBooks } from './state/library.selector';

@Component({
  selector: 'app-library',
  templateUrl: 'library.component.html',
})
export class LibraryComponent {
  booksCount$: Observable<number> = this.store.select(countBooks);

  constructor(private readonly store: Store) {}
}
