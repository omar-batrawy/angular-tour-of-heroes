import { Injectable } from '@angular/core';
import { Hero } from './Hero';
import { Heros } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    const heroes = of(Heros);
    this.MessageService.add('HeroService: fetched heroes');
    return heroes;
  }

  constructor(private MessageService: MessageService) {}
}
