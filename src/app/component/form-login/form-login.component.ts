import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormValidator } from '../validators/form-validators';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from 'src/app/models/usuario';
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent {
  usuario: Usuario;
  formLogin: FormGroup;
email: any;
clave: any;
  constructor(private auth: AuthService){
  this.formLogin = new FormGroup({
    email: new FormControl(null, {
      validators: [FormValidator.onlyLetters],
      updateOn: 'change',
    }),
    clave: new FormControl(null, {
      validators: [FormValidator.onlyLetters],
      updateOn: 'change',
    })
  });
  }
  onSubmit() {
    this.auth.login(this.formLogin.value.email, this.formLogin.value.clave).then(async res =>{
      this.usuario={
        uid: res.user.uid,
        nombre: res.user.displayName,
        email: res.user.email
      }})
  }
}
