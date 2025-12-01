import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-component',
  templateUrl: './display-component.html',
  styleUrls: ['./display-component.css']
})
export class DisplayComponent implements OnInit {  // Composant parent (DisplayComponent)

  constructor() {}

  // Envoie des 3 champs à l'enfant (VoterComponent)
  public question = 'Too easy?';
  public yesAnswer = 'Yes answer';
  public noAnswer = 'no answer';

  // Response voter
  public answer: string;

  setVote(event: boolean): void { // Reception output depuis enfant
    this.answer = event ? this.yesAnswer : this.noAnswer;
  }

  ngOnInit(): void {}

}
