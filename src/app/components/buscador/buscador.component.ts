import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string = "";

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private router: Router,
    private heroesService: HeroesService
  ) { }

  ngOnInit(): void {
    this.ActivatedRoute.params
    .subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this.heroesService.searchHeroes(params ['termino']);
      console.log(this.heroes)
    })
  }

  getHeroe( index: number ){
    this.router.navigate(['heroes', index])
  }
}
