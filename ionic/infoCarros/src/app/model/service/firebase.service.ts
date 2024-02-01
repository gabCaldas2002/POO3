import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { Carro } from '../entities/Carro';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/compat/storage'; 

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private PATH : string = 'infoCarros';

  constructor(private firestore : AngularFirestore, private storage : AngularFireStorage) {}

  read(uid: string){
    return this.firestore.collection(this.PATH, ref => ref.where('uid', '==', uid))
    .snapshotChanges();
  }

  create(carro : Carro){
    return this.firestore.collection(this.PATH).add({
      modelo: carro.modelo,
      marca: carro.marca,
      cor: carro.cor,
      ano: carro.ano,
      potencia: carro.potencia,
      porta: carro.porta,
      uid: carro.uid
    });
  }

  createWithImage(carro : Carro){
    return this.firestore.collection(this.PATH).add({
      modelo: carro.modelo,
      marca: carro.marca,
      cor: carro.cor,
      ano: carro.ano,
      potencia: carro.potencia,
      porta: carro.porta,
      downloadURL: carro.downloadURL,
      uid: carro.uid
    });
  }

  update(carro: Carro, id: string){
    return this.firestore.collection(this.PATH).doc(id).update({
      modelo: carro.modelo,
      marca: carro.marca,
      cor: carro.cor,
      ano: carro.ano,
      potencia: carro.potencia,
      porta: carro.porta,
      uid: carro.uid
    });
  }

  updateWithImage(carro: Carro, id: string){
    return this.firestore.collection(this.PATH).doc(id).update({
      modelo: carro.modelo,
      marca: carro.marca,
      cor: carro.cor,
      ano: carro.ano,
      potencia: carro.potencia,
      porta: carro.porta,
      downloadURL: carro.downloadURL,
      uid: carro.uid
    });
  }

  delete(id: string){
    return this.firestore.collection(this.PATH).doc(id).delete();
  }

  uploadImage(imagem: any, carro: Carro){
    const file = imagem.item(0);
    if(file.type.split('/')[0] !== 'image'){
      console.error('Tipo não suportado');
      return;
    }
    const path = `images/${carro.modelo}_${file.name}`;
    const fileRef = this.storage.ref(path);
    let task = this.storage.upload(path,file);
    task.snapshotChanges().pipe(
      finalize(()=>{
        let uploadFileURL = fileRef.getDownloadURL();
        uploadFileURL.subscribe(resp=>{
          carro.downloadURL = resp;
          if(!carro.id){
            this.createWithImage(carro)
          }else{
            this.updateWithImage(carro, carro.id);
          }
        })
      })
    ).subscribe();
  }
}
