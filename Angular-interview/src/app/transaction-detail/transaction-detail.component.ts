import { Component, Input, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit {

  @Input() fee: number;
  @Input() name: string;
  @Input() amount: number;
  @Input() currency: string;
  @Input() timeOfTransaction: Date;

  constructor() { }

  ngOnInit(): void {
  }

  public getPresetDate(): Date {
    return new Date(1997, 6, 1, 12, 32, 1);
  }

}
