import { Component } from '@angular/core';
import { Hero } from '../Hero';

import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css'],
})
export class HerosComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    public messageService: MessageService
  ) {} //why private? can we add more than one service?
  // it can you when getting data from local file, but when getting data from server, it can't because data not ready yet
  //getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
    console.log('test : ', this.heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  //why ngOnInit? why not constructor?
}
