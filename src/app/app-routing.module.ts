import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';
import { PokedexComponent } from './pokedex/pokedex.component';

const routes: Routes = [
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'forms',
    component : FormsComponent
  },
  {
    path : 'pokedex',
    component : PokedexComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
