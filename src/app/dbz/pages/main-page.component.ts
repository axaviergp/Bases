import { DbzService } from './../services/dbz.service';
import { Character } from './../interfaces/character.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(private dbzService: DbzService) { }

  get characters(): Character[] {

    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterbyId(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }

}
