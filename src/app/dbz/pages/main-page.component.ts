import { Character } from './../interfaces/character.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  public characters: Character[] = [
    {
      name: 'krillin',
      power: 1000
    }, {
      name: 'Goku',
      power: 5000
    }, {
      name: 'Vegeta',
      power: 7500
    }
  ];

}
