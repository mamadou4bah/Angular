import { Component, OnInit } from '@angular/core';
import { AccountingService } from './account.service';

@Component({
  selector: 'account-component',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  message: string = '';

  constructor(public accountingService: AccountingService) {}

  ngOnInit(): void {}

  async createAccount(accountID: string): Promise<void> {
    try {
      await this.accountingService.createAccount(accountID);
      this.message = `Successfully added account ${accountID}.`;
    } catch (error: any) {
      if (error.message === 'ACCOUNT_EXISTS') {
        this.message = `Account ${accountID} already exists.`;
      } else {
        this.message = `Error creating account ${accountID}: ${error.message}`;
      }
    }
  }

  async topUp(accountID: string, amount: number): Promise<void> {
    if (amount <= 0) {
      this.message = `INVALID_INPUT.`;
      return;
    }
    try {
      const newBalance = await this.accountingService.topUp(accountID, amount);
      this.message = `Current balance: ${newBalance}.`;
    } catch (error: any) {
      if (error.message === 'ACCOUNT_DOES_NOT_EXIST') {
        this.message = `Account ${accountID} does not exist.`;
      } else {
        this.message = `Error topping up account ${accountID}: ${error.message}`;
      }
    }
  }
}
