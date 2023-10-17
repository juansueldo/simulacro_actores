import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, updateProfile } from "firebase/auth";
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }
  login(email: string, password: string){
    return this.auth.signInWithEmailAndPassword(email,password)
  }

  signinUp(email: string, password: string){
    return this.auth.createUserWithEmailAndPassword(email,password)
  }

  updateUser(user: any){
    const auth = getAuth();
    return updateProfile(auth.currentUser, user)
  }
  logout(){
    return this.auth.signOut();
  }
  mailLogueado() {
    return this.auth.authState
      .pipe(map(user => user ? user.email : null)); // Mapea para devolver el correo electrónico si está autenticado o null si no lo está
  }
}
