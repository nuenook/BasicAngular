import { Component, Input } from '@angular/core';
import { Hero } from '../app/Models/hero/hero.model'

const HEROES: Hero[] = [
    { name: 'Mccree' },
    { name: 'Widowmaker' },
    { name: 'Hanzo' }
];

@Component({
    selector: 'hero-select',
    templateUrl: './hero-selected.component.html'
})
export class HeroSelected {
    heroes = HEROES;
   @Input() selectedHerox : Hero;
}
 