import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Actor } from '../models/actor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Pelicula {
  
  constructor(private db: AngularFirestore) { }

  agregarActor(actor:Actor){
    this.db.collection('actores').add(actor);

  }
  loadActores(): Observable<Actor[]> {
    return this.db.collection<Actor>('actores').valueChanges();
  }
}
