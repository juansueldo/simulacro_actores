import { Component, ViewChild } from '@angular/core';
import { FormPeliculaComponent } from 'src/app/component/form-pelicula/form-pelicula.component';
import { Actor } from 'src/app/models/actor';

@Component({
  selector: 'app-alta-pelicula',
  templateUrl: './alta-pelicula.component.html',
  styleUrls: ['./alta-pelicula.component.scss']
})
export class AltaPeliculaComponent {
  selectedActor!: Actor;
  loading = false;
  @ViewChild('form') form!: FormPeliculaComponent;
  selectActor(e: Actor) {
    this.form.setActor(e);
    this.selectedActor = e;
  }
}
