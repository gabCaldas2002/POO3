import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Contato } from 'src/app/model/entities/Contato';
import Genero from 'src/app/model/entities/Genero';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nome!: string;
  telefone!: number;
  email! : string
  genero! : Genero
  lista_contatos: Contato[] = []

  constructor(private alertController: AlertController) {
    let c1 : Contato = new Contato("Gabriel Caldas", 999757112, "gabriel@gmail.com", Genero.MASCULINO)
    let c2 : Contato =  new Contato("Bruno Samp", 998254477, "bruno@gmail.com", Genero.NAODECLARAR)
    let c3 : Contato = new Contato("Eduardo Messias", 982475631, "eduardo@gmail.com", Genero.MASCULINO)
    this.lista_contatos.push(c1);
    this.lista_contatos.push(c2);
    this.lista_contatos.push(c3);
  }

  cadastrar(){
    if(!this.nome || !this.telefone){
      this.presentAlert("Erro", "Todos os campos são obrigatórios");
    }
    else{
      this.presentAlert("Sucesso", "Contato cadastrado")
      let novo: Contato = new Contato(this.nome, this.telefone, this.email, this.genero)
      this.lista_contatos.push(novo);
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
