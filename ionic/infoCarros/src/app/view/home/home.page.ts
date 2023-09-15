import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Carro } from 'src/app/model/entities/Carro';
import Portas from 'src/app/model/entities/Portas';
import { FirebaseService } from 'src/app/model/service/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  lista_carros: Carro[] = []

  constructor(private alertController: AlertController, private router: Router, private firebase: FirebaseService) {
    this.firebase.read()
    .subscribe(res => {
      this.lista_carros = res.map(carro => {
        return {
          id: carro.payload.doc.id,
          ...carro.payload.doc.data() as any
        }as Carro
      })
    });
  }

  irParaCadastrar(){
    this.router.navigate(["/cadastrar"]);
  }

  editar(carro : Carro){
    this.router.navigateByUrl("/detalhar", {state: {carro: carro}});
  }
}
