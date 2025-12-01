import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'test-component',
  template: `
    <div
      *ngIf="!inputData || inputData.length === 0; else dataBlock"
      id="noData"
    >
      No data
    </div>

    <ng-template #dataBlock>
      <div id="dataList">
        <div
          *ngFor="let item of inputData"
          [style.color]="item.length % 2 === 0 ? 'green' : 'red'"
        >
          {{ item }}
        </div>
      </div>
    </ng-template>
  `,
})
export class TestComponent implements OnInit {
  @Input() inputData?: Array<string>;

  constructor() {}

  ngOnInit(): void {}
}
