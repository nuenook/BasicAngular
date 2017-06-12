import { Component, OnInit } from '@angular/core';
import { Hero } from './Model/hero.model'
import { HeroService } from './Service/hero.service'; 
import {Router} from "@angular/router";

//metadata
@Component({
  selector: 'my-heroes',
  providers: [HeroService],
  templateUrl: `./heroes.component.html`,
  styleUrls: ['./app.component.css']
})

export class HeroesComponent implements OnInit{
  tite = 'Tour of Heroes';
  heroes: Hero[]; 
  hero: Hero =
  {
    id: 1,
    name: 'windstrom'
  }

  constructor(private heroService: HeroService,private router: Router) { }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  gotoDetail()
  {
     this.router.navigate(['/detail', this.selectedHero.id]);
  }
  add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.heroService.create(name)
    .then(hero => {
      this.heroes.push(hero);
      this.selectedHero = null;
    });
}
delete(hero: Hero): void {
  this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
}

}

