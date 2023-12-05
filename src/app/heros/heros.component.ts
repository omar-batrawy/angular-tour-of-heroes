import { Component } from '@angular/core';
import { Hero } from '../Hero';
import { Heros } from '../mock-heroes';
import { HeroService } from '../hero.service';

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
  heroes: Hero[] = [];
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor(private heroService: HeroService) {} //why private? can we add more than one service?
  // it can you when getting data from local file, but when getting data from server, it can't because data not ready yet
  //getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  //why ngOnInit? why not constructor?
}
