import { Component, ViewChild } from '@angular/core';
import { FormActorComponent } from 'src/app/component/form-actor/form-actor.component';
import { Pais } from 'src/app/models/pais';

@Component({
  selector: 'app-alta-actores',
  templateUrl: './alta-actores.component.html',
  styleUrls: ['./alta-actores.component.scss']
})
export class AltaActoresComponent {
  user!: any;
  selectedCountry!: Pais;
  loading = false;
  @ViewChild('form') form!: FormActorComponent;

  ngOnInit(): void {
    this.cargarUsuario();
  }
  selectCountry(e: Pais) {
    this.form.setPais(e);
    this.selectedCountry = e;
  }

  cargarUsuario() {
    let user = localStorage.getItem('user');
    if (user !== null) {
      this.user = JSON.parse(user);
    }
  }
}
