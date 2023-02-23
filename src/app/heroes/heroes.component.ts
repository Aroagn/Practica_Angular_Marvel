import { Component, OnInit } from '@angular/core';
import { Result } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes: Result[] = [];

  public p!:number;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(resp => {
      console.log(resp.data.results);
      this.heroes = resp.data.results;
    })
  }
}
