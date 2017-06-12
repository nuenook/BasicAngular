import { Component, Input } from '@angular/core';
import { Hero } from '../app/Models/hero/hero.model'

const HEROES: Hero[] = [
    { name: 'Mccree' },
    { name: 'Widowmaker' },
    { name: 'Hanzo' }
];

@Component({
    selector: 'hero-all',
    templateUrl: './hero-all.component.html',
})
export class HeroAllComponent {
    heroes = HEROES;
    selectedHero : Hero;

    bindvalue (hero : Hero): void{
        this.selectedHero = hero;
 }
}
 