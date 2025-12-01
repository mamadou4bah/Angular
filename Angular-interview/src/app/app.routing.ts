import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './account/account.component';
import { DisplayComponent } from './display-component/display-component';
import { LabelComponentComponent } from './label-component/label-component.component';
import { TestComponent } from './test-component/test.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { VoterComponent } from './voter-component/voter-component';

export const routes: Routes = [
  { path: 'display', component: DisplayComponent },
  { path: 'voter', component: VoterComponent },
  { path: 'label', component: LabelComponentComponent },
  { path: 'transaction', component: TransactionDetailComponent },
  { path: 'test', component: TestComponent },
  { path: 'account', component: AccountComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules, // <- comment this line for activate lazy load
      // useHash: true
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
