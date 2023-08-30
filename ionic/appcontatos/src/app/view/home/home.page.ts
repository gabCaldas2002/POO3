import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Contato } from 'src/app/model/entities/Contato';
import Genero from 'src/app/model/entities/Genero';
import { ContatoService } from 'src/app/model/services/contato.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  lista_contatos: Contato[] = []

  constructor(private alertController: AlertController, private router: Router, private contatoService: ContatoService) {
    this.lista_contatos = this.contatoService.obterTodos();
  }

  irParaCadastrar(){
    this.router.navigate(["/cadastrar"]);
  }

  editar(indice : number){
    this.router.navigate(["/detalhar", indice]);
  }
}
