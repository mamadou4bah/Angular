import { createReducer, on, Action, State } from '@ngrx/store';
import { BookState, initialBookState } from '../state/book.state';
import * as bookActions from '../actions/book.actions';

const booksReducer = createReducer(
  initialBookState,
  on(bookActions.Init, (state) => ({ ...state, loaded: false, error: null })),
  on(bookActions.LoadBooks, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(bookActions.LoadBooksSuccess, (state, { data }) => ({
    ...state,
    books: data,
    loaded: true,
    error: null,
  })),
  on(bookActions.LoadBooksFailure, (state, { error }) => ({ ...state, error })),
  on(bookActions.AddBook, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(bookActions.AddBookSuccess, (state, { data }) => {
    let books = [...state.books];
    books.push(data);
    return {
      ...state,
      books: books,
      loaded: true,
      error: null,
    };
  }),
  on(bookActions.LoadBooksFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: BookState | undefined, action: Action) {
  return booksReducer(state, action);
}
