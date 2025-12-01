import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'revision-codingame';

  firstName: string = 'Martin global';
  surName: string = 'Piyal global';

  constructor() {}

  objOne = {
    firstName: 'Martin',
    surName: 'Piyal',

    // Méthode normale
    getFullNameNormal(): string {
      // fais référence à l'objet objOne
      /*( firstName: 'Martin',
          surName: 'Piyal',
      )*/
      console.log('Normal this:', this);
      return this.firstName + ' ' + this.surName;
    },

    // Fonction fléchée
    getFullNameArrow: (): string => {
      //Fais reférence à l'objet global (
      // firstName: string = 'Martin global';
      // surName: string = 'Piyal global';)
      console.log('Arrow this:', this);
      return this.firstName + ' ' + this.surName;
    },
  };
}
