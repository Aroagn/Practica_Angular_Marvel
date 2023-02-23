import { Component, OnInit } from '@angular/core';
import { Result } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

  heroes: Result[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  // Se muestran 8 heroes de forma aleatoria en el Dashboard

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(resp => {
      console.log(resp.data.results);
      this.heroes = resp.data.results.sort(() => 0.5 - Math.random()).slice(0,8);
    })
  }
}
