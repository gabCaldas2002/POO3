import { Injectable } from '@angular/core';
import { Contato } from '../entities/Contato';
import {AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private PATH : string = 'contatos';

  constructor(private firestore : AngularFirestore) {}

  read(){
    return this.firestore.collection(this.PATH).snapshotChanges();
  }

  create(contato : Contato, id: string){
    return this.firestore.collection(this.PATH).add({
      nome: contato.nome,
      telefone: contato.telefone,
      email: contato.email,
      genero: contato.genero
    });
  }

  update(contato: Contato, id: string){
    return this.firestore.collection(this.PATH).doc(id).update({
      nome: contato.nome,
      telefone: contato.telefone,
      email: contato.email,
      genero: contato.genero
    });
  }

  delete(id: string){
    return this.firestore.collection(this.PATH).doc(id).delete();
  }
}
