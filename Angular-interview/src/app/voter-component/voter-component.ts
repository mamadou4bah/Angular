import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-voter-component',
  templateUrl: './voter-component.html',
  styleUrls: ['./voter-component.css']
})
export class VoterComponent implements OnInit { // Composant enfant (VoterComponent)

  // Parent vers enfant
  @Input() question: string;
  @Input() yesAnswer: string;
  @Input() noAnswer: string;

  // Response voter
  @Output() output = new EventEmitter<boolean>(); // Enfant vers parent

  constructor() { }

  ngOnInit(): void {
  }

  setVote(isVote: boolean): void {
    this.output.emit(isVote);   // Envoie output vers parent (DisplayComponent)
  }

}
