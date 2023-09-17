import { Injectable } from '@angular/core';
import { Character } from '../interfaces/Character.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuidv4(),
      name: 'Vegeta',
      power: 7500
    },
    {
      id: uuidv4(),
      name: 'Kid Boo',
      power: 234000
    },
    {
      id: uuidv4(),
      name: 'Trunks',
      power: 50000
    }
  ];

  constructor() { }

  addCharacter( character:Character ):void {

    const newCharacter:Character = {id: uuidv4(), ...character};

    this.characters = [...this.characters, newCharacter];
  }

  deleteCharacterById( id:string ) {
    this.characters = this.characters.filter( character => character.id !== id);
  }
}
