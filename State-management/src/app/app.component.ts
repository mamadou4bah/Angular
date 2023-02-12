import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { filter, switchMap } from 'rxjs/operators';
import { BookFacade } from './store/book.facade';
import { Book } from './store/state/book.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public books: Book[] = [];
  @ViewChild('title', { static: true }) titleElement!: ElementRef;
  @ViewChild('author', { static: true }) authorElement!: ElementRef;
  @ViewChild('year', { static: true }) yearElement!: ElementRef;
  public constructor(private readonly bookFacade: BookFacade) {}

  public ngOnInit(): void {
    this.bookFacade.loadBooks();
    this.bookFacade.loaded$
      .pipe(
        filter((isLoaded: boolean) => isLoaded === true),
        switchMap(() => this.bookFacade.allBooks$)
      )
      .subscribe((books: Book[]) => {
        this.books = books;
        console.log(books);
      });
  }

  public addBook(): void {
    const newBook: Book = {
      title: this.titleElement.nativeElement.value,
      author: this.authorElement.nativeElement.value,
      publicationDate: this.yearElement.nativeElement.value,
    };
    this.bookFacade.addBook(newBook);
  }
}
