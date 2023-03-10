export const BOOKS_FEATURE_KEY = 'books';

export interface BookState {
  books: Book[];
  loaded: boolean;
  error?: string | null;
}

export const initialBookState: BookState = {
  books: [],
  loaded: false,
  error: null,
};

export interface Book {
  title?: string;
  author?: string;
  publicationDate?: string;
  imageUrl?: string;
}
