import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book, BookState } from './state/book.state';
import * as bookSelectors from './selectors/book.selectors';
import * as bookActions from './actions/book.actions';

@Injectable()
export class BookFacade {
  public readonly loaded$: Observable<boolean> = this.store.pipe(
    select(bookSelectors.getBooksLoaded)
  );
  public readonly allBooks$: Observable<Book[]> = this.store.pipe(
    select(bookSelectors.getAllBooks)
  );

  constructor(private readonly store: Store<BookState>) {}
  public init(): void {
    this.store.dispatch(bookActions.Init());
  }
  public loadBooks(): void {
    this.store.dispatch(bookActions.LoadBooks());
  }
  public addBook(book: Book): void {
    this.store.dispatch(bookActions.AddBook({ data: book }));
  }
}
