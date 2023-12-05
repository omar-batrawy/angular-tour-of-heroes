import { Injectable } from '@angular/core';
import { Hero } from './Hero';
import { Heros } from './mock-heroes';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    const heroes = of(Heros);
    return heroes;
  }

  constructor() {}
}
