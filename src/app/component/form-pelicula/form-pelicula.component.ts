import { Component, Output,Input, EventEmitter } from '@angular/core';
import { Actor } from 'src/app/models/actor';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { ImagenService } from 'src/app/services/imagen.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormValidator } from '../validators/form-validators';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-form-pelicula',
  templateUrl: './form-pelicula.component.html',
  styleUrls: ['./form-pelicula.component.scss']
})
export class FormPeliculaComponent {
  pelicula: Pelicula;
  formPelicula: FormGroup;
  imagen!:File;
  pathImg:string = '';
  @Input() selectedActor!: Actor;
  @Output() loadingEvent = new EventEmitter<boolean>();

  constructor(private peliculaService : PeliculaService){
    this.formPelicula = new FormGroup({
      nombre: new FormControl(null, {
        validators: [FormValidator.onlyLetters],
        updateOn: 'change',
      }),
      tipo: new FormControl(null, {
        validators: [FormValidator.onlyLetters],
        updateOn: 'change',
      }),
      fechaDeEstreno: new FormControl(null, {
        validators: [FormValidator.onlyLetters],
        updateOn: 'change',
      }),
      cantidadDePublico: new FormControl(null, {
        validators: [FormValidator.onlyNumbers],
        updateOn: 'change',
      }),
      fotoDePelicula: new FormControl(null, {
        validators: [FormValidator.lettersAndNumbers],
        updateOn: 'change',
      }),
      actor: new FormControl(),
    });
  }
  onSubmit() {
    this.validateEmptyInputs();
    if (this.formPelicula.invalid) return;

   this.pelicula = {
     id: Math.floor(Math.random() * 10000000),
      nombre: this.nombre.value,
      tipo: this.tipo.value,
      fechaDeEstreno: this.fechaDeEstreno.value,
      cantidadDePublico:this.cantidadDePublico.value,
      fotoDePelicula:this.fotoDePelicula.value,
      actor:this.actor.value,
    };

    this.loadingEvent.emit(true);
    this.peliculaService.agregarPelicula(this.pelicula);
    //this.imagenService.guardarImagen(this.imagen,this.pathImg);
      this.loadingEvent.emit(false);
      this.formPelicula.reset();
  }
  guardarImagen(event:any) {    
    
    const file: File = event.target.files[0];
    this.imagen = file;
    console.log(event.target.files[0].name);
    this.pathImg = event.target.files[0].name;    
  };
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
  get tipo() {
    return this.formPelicula.controls['tipo'];
  }
  get actor() {
    return this.formPelicula.controls['actor'];
  }
  get fechaDeEstreno() {
    return this.formPelicula.controls['fechaDeEstreno'];
  }
  get cantidadDePublico() {
    return this.formPelicula.controls['cantidadDePublico'];
  }
  get fotoDePelicula() {
    return this.formPelicula.controls['fotoDePelicula'];
  }

}
