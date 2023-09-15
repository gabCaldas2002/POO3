import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Carro } from 'src/app/model/entities/Carro';
import Portas from 'src/app/model/entities/Portas';
import { FirebaseService } from 'src/app/model/service/firebase.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})

export class CadastrarPage{
  modelo! : string;
  marca! : string;
  cor! : string;
  ano! : number;
  potencia! : number;
  porta! : Portas
  lista_carros: Carro[] = []

  constructor(private alertController: AlertController, private router: Router, private firebase: FirebaseService){}

  ngOnInit(){}

  cadastrar(){
    if(!this.modelo || !this.marca){
      this.presentAlert("Erro", "Todos os campos são obrigatórios");
    }
    else{
      this.presentAlert("Sucesso", "Contato cadastrado")
      let novo: Carro = new Carro(this.modelo, this.marca, this.cor, this.ano, this.potencia, this.porta)
      this.firebase.create(novo);
      this.router.navigate(["/home"])
      console.log(novo)
    }
    
  }

  async presentAlert(subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Cadastrar um carro',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
  }

