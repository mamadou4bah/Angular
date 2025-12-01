import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';

import { AccountComponent } from './account/account.component';
import { AccountingService } from './account/account.service';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { SharkDirective } from './directives/shark.directive';
import { DisplayComponent } from './display-component/display-component';
import { LabelComponentComponent } from './label-component/label-component.component';
import { TestComponent } from './test-component/test.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { VoterComponent } from './voter-component/voter-component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    VoterComponent,
    LabelComponentComponent,
    TransactionDetailComponent,
    ChildComponent,
    SharkDirective,
    TestComponent,
    AccountComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [AccountingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
