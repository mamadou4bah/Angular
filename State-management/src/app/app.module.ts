import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookFacade } from './store/book.facade';
import { BooksEffects } from './store/effects/book.effects';
import { reducer } from './store/reducers/book.reducers';
import { BOOKS_FEATURE_KEY } from './store/state/book.state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(BOOKS_FEATURE_KEY, reducer),
    EffectsModule.forRoot([BooksEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [BookFacade],
  bootstrap: [AppComponent],
})
export class AppModule {}
