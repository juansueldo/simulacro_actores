import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Pelicula } from '../models/pelicula';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  
  constructor(private db: AngularFirestore) { }

  agregarPelicula(pelicula:Pelicula){
    this.db.collection('peliculas').add(pelicula);

  }
  loadPeliculas(): Observable<Pelicula[]> {
    return this.db.collection<Pelicula>('peliculas').valueChanges();
  }
}
