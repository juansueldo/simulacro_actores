import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {
  itemsCollection !: AngularFirestoreCollection<any>;
  dataImg !: Observable<any[]>;
  constructor(private storage:AngularFirestore) { }

  guardarImagen(foto : any){
    const nombreImagen = `${new Date().getTime()}`;
    this.storage.collection('peliculas').doc(nombreImagen).set(foto);
  }

  descargarImagen(tipo : string){
    this.itemsCollection = this.storage.collection<any>('peliculas',ref => ref);
    return this.dataImg = this.itemsCollection.valueChanges();
  }

}