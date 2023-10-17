import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaActoresComponent } from './page/alta-actores/alta-actores.component';
import { AltaPeliculaComponent } from './page/alta-pelicula/alta-pelicula.component';

const routes: Routes = [
  {path: '', redirectTo: 'alta-actor', pathMatch: 'full'},
  {path: 'alta-actor', component: AltaActoresComponent},
  {path: 'alta-pelicula', component: AltaPeliculaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
