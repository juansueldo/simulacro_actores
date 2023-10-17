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
    this.storage.collection('peliculas').doc(foto.id.toString()).set(foto,{merge:true});
  }

  descargarImagen(tipo : string){
    this.itemsCollection = this.storage.collection<any>('peliculas',ref => ref.where('tipo','==',tipo));
    return this.dataImg = this.itemsCollection.valueChanges();
  }

}