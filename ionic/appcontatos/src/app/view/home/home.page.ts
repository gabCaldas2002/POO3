import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Contato } from 'src/app/model/entities/Contato';
import Genero from 'src/app/model/entities/Genero';
import { FirebaseService } from 'src/app/model/services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  lista_contatos: Contato[] = []

  constructor(private alertController: AlertController, private router: Router, private firebase: FirebaseService) {
    this.firebase.read()
    .subscribe(res => {
      this.lista_contatos = res.map(contato => {
        return {
          id: contato.payload.doc.id,
          ...contato.payload.doc.data() as any
        }as Contato
      })
    });
  }

  irParaCadastrar(){
    this.router.navigate(["/cadastrar"]);
  }

  editar(contato : Contato){
    this.router.navigateByUrl("/detalhar", {state: {contato: contato}});
  }
}
