import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ChildComponent } from './child/child.component';
import { SharkDirective } from './directives/shark.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit, OnInit {
  // viewChild sur une directive
  @ViewChild(SharkDirective)
  set appShark(directive: SharkDirective) {
    this.extraCreature = directive.creature;
  }
  extraCreature: string;
  childComponent: string;

  // viewChild avec les éléments DOM
  @ViewChild('someInput') someInput: ElementRef;

  // viewChild with component child
  @ViewChild(ChildComponent) child: ChildComponent;

  testArray = ['Odd', 'Even', 'Another'];

  transactions = [
    {
      id: 1,
      name: 'Transaction 0001234587525331',
      fee: 0.031234,
      amount: 6000,
      currency: 'EUR',
      timeOfTransaction: new Date(),
    },
    {
      id: 2,
      name: 'Transaction 00012345784564565',
      fee: 0.03,
      amount: 700,
      currency: 'CAD',
      timeOfTransaction: new Date(),
    },
    {
      id: 4,
      name: 'Transaction 00012345875784587',
      fee: 1.0,
      amount: 312.562,
      currency: 'EUR',
      timeOfTransaction: new Date(),
    },
    {
      id: 3,
      name: 'Transaction 00012345875253531',
      fee: 1.1,
      amount: 700000000.5689,
      currency: 'USD',
      timeOfTransaction: new Date(),
    },
  ];

  ngAfterViewInit(): void {
    console.log(this.extraCreature); // Dolphin
    this.someInput.nativeElement.value = 'Wow viewChild with DOM! ';
    this.childComponent = this.child.whoIam();
    console.log(this.childComponent);
  }
  ngOnInit(): void {}
}
