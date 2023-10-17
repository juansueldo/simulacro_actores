import { Component, Output,Input, EventEmitter } from '@angular/core';
import { Actor } from 'src/app/models/actor';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormValidator } from '../validators/form-validators';

@Component({
  selector: 'app-form-pelicula',
  templateUrl: './form-pelicula.component.html',
  styleUrls: ['./form-pelicula.component.scss']
})
export class FormPeliculaComponent {
  formPelicula: FormGroup;
  @Input() selectedActor!: Actor;
  @Output() loadingEvent = new EventEmitter<boolean>();
  constructor(){
    this.formPelicula = new FormGroup({
      nombre: new FormControl(null, {
        validators: [FormValidator.onlyLetters],
        updateOn: 'change',
      }),
      genero: new FormControl(null, {
        validators: [FormValidator.onlyLetters],
        updateOn: 'change',
      }),
      actor: new FormControl(),
    });
  }
  onSubmit() {
    this.validateEmptyInputs();
    if (this.formPelicula.invalid) return;

   /* this.actor = {
     id: Math.floor(Math.random() * 10000000),
      nombre: this.nombre.value,
      apellido: this.apellido.value,
      edad: Number(this.edad.value),
      pais_origen: {
        nombre: this.selectedCountry.nombre,
        img: this.selectedCountry.img,
        idioma: this.selectedCountry.idioma,
      },
    };

    this.loadingEvent.emit(true);
    this.actorService.agregarActor(this.actor);*/
      this.loadingEvent.emit(false);
      this.formPelicula.reset();
  }

  validateEmptyInputs() {
    const arrayControls = Object.values(this.formPelicula.controls).map(
      (obj) => obj
    );
    arrayControls.forEach((control) => {
      if (!control.value) {
        control.setErrors({ invalid: true });
      }
    });
  }
  setActor(actor: Actor) {
    this.actor.setValue(actor.nombre, actor.apellido);
  }
  get nombre() {
    return this.formPelicula.controls['nombre'];
  }
  get genero() {
    return this.formPelicula.controls['genero'];
  }
  get actor() {
    return this.formPelicula.controls['actor'];
  }

}
