import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Pais } from 'src/app/models/pais';
import { FormValidator } from '../validators/form-validators';
import { FormInputComponent } from '../form-input/form-input.component';
import { ActorService } from 'src/app/services/actor.service';
import { Actor } from 'src/app/models/actor';


@Component({
  selector: 'app-form-actor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormInputComponent],
  templateUrl: './form-actor.component.html',
  styleUrls: ['./form-actor.component.scss']
})
export class FormActorComponent implements OnInit{
  formActor: FormGroup;
  actor: Actor;
  @Input() selectedCountry!: Pais;
  @Output() loadingEvent = new EventEmitter<boolean>();

  constructor(private actorService: ActorService) {
    this.formActor = new FormGroup({
      nombre: new FormControl(null, {
        validators: [FormValidator.onlyLetters],
        updateOn: 'change',
      }),
      apellido: new FormControl(null, {
        validators: [FormValidator.onlyLetters],
        updateOn: 'change',
      }),
      edad: new FormControl(18, {
        validators: [FormValidator.onlyNumbers, Validators.min(18)],
        updateOn: 'change',
      }),
      pais: new FormControl(),
    });
  }
  ngOnInit(): void {}

  onSubmit() {
    this.validateEmptyInputs();
    if (this.formActor.invalid) return;

    this.actor = {
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
    setTimeout(() => {     
      this.actorService.agregarActor(this.actor);
      this.loadingEvent.emit(false);
      this.formActor.reset();
    }, 2000);
  }

  setPais(pais: Pais) {
    this.pais.setValue(pais.nombre);
  }

  validateEmptyInputs() {
    const arrayControls = Object.values(this.formActor.controls).map(
      (obj) => obj
    );
    arrayControls.forEach((control) => {
      if (!control.value) {
        control.setErrors({ invalid: true });
      }
    });
  }

  
  get nombre() {
    return this.formActor.controls['nombre'];
  }
  get apellido() {
    return this.formActor.controls['apellido'];
  }
  get edad() {
    return this.formActor.controls['edad'];
  }
  get pais() {
    return this.formActor.controls['pais'];
  }

}
