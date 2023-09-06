import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Contato } from 'src/app/model/entities/Contato';
import Genero from 'src/app/model/entities/Genero';
import { FirebaseService } from 'src/app/model/services/firebase.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})

export class CadastrarPage{
  nome!: string;
  telefone!: number;
  email! : string
  genero! : Genero
  lista_contatos: Contato[] = []

  constructor(private alertController: AlertController, private router: Router, private firebase: FirebaseService){}

  ngOnInit(){}

  cadastrar(){
    if(!this.nome || !this.telefone){
      this.presentAlert("Erro", "Todos os campos são obrigatórios");
    }
    else{
      this.presentAlert("Sucesso", "Contato cadastrado")
      let novo: Contato = new Contato(this.nome, this.telefone, this.email, this.genero)
      this.firebase.create(novo);
      this.router.navigate(["/home"])
      console.log(novo)
    }
    
  }

  async presentAlert(subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Agenda de contatos',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
  }

