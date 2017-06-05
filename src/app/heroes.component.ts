import { Component, Input, OnInit } from '@angular/core';
import { Router }   from '@angular/router';
import { Hero } from './hero';
import {HeroService} from './hero.service'

@Component({
  selector: 'my-heroes',

templateUrl: './heroes.component.html',
styleUrls: ['./heroes.component.css']

})


  export class HeroesComponent implements OnInit{

  constructor(
    private router: Router,
    private heroService: HeroService) { }

    
  selectedHero: Hero;
  heroes: Hero[];
  
  gotoDetail(): void {
  this.router.navigate(['/detail', this.selectedHero.id]);
}

  onSelect(hero: Hero): void {
  this.selectedHero = hero;
  
}

  ngOnInit(): void {
    this.getHeroes();
  }

constructor(private heroService: HeroService) { }

 getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
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


