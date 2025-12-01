import { Component, Input, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'label-component',
  templateUrl: './label-component.component.html',
  styleUrls: ['./label-component.component.css']
})
export class LabelComponentComponent implements OnInit {

  @Input() label: string;
  @Input() color: string;

  constructor() { }

  ngOnInit(): void {
  }

}
