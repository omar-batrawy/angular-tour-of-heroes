import { Component } from '@angular/core';
import { Hero } from '../Hero';
import { Heros } from '../mock-heroes';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css'],
})
export class HerosComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
  heroes = Heros;
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
