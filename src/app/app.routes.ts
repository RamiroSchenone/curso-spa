import { RouterModule , Routes } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { BuscadorComponent } from "./components/buscador/buscador.component";
import { HeroeComponent } from "./components/heroe/heroe.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HomeComponent } from "./components/home/home.component";

const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroes/:id', component: HeroeComponent },
    { path: 'buscar/:termino', component: BuscadorComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: true });