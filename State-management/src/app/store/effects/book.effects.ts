import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { BookActionsNames } from '../actions/book.actions';
import * as bookActions from '../actions/book.actions';
import fakeResponse from '../../data/data.json';
import { Book } from '../state/book.state';

@Injectable()
export class BooksEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly http: HttpClient
  ) {}
  public readonly loadBooks$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActionsNames.LoadBooks),
      switchMap(() => of(fakeResponse)),
      map((data: Book[]) => bookActions.LoadBooksSuccess({ data })),
      catchError((error: string | null) =>
        of(bookActions.LoadBooksFailure({ error }))
      )
    );
  });
  public readonly addBook$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActionsNames.AddBook),
      map((data: any) => {
        const book: Book = data.data;
        return bookActions.AddBookSuccess({ data: book });
      }),
      catchError((error: string | null) =>
        of(bookActions.AddBookFailure({ error }))
      )
    );
  });
}
