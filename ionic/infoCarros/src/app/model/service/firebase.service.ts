import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { Carro } from '../entities/Carro';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private PATH : string = 'infoCarros';

  constructor(private firestore : AngularFirestore) {}

  read(){
    return this.firestore.collection(this.PATH).snapshotChanges();
  }

  create(carro : Carro){
    return this.firestore.collection(this.PATH).add({
      modelo: carro.modelo,
      marca: carro.marca,
      cor: carro.cor,
      ano: carro.ano,
      potencia: carro.potencia,
      porta: carro.porta
    });
  }

  update(carro: Carro, id: string){
    return this.firestore.collection(this.PATH).doc(id).update({
      modelo: carro.modelo,
      marca: carro.marca,
      cor: carro.cor,
      ano: carro.ano,
      potencia: carro.potencia,
      porta: carro.porta
    });
  }

  delete(id: string){
    return this.firestore.collection(this.PATH).doc(id).delete();
  }
}
