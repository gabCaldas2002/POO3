import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nome!: string;
  telefone!: number;
  lista_contatos: any[] = [
    {"nome": "Gabriel Caldas", "telefone": 999757112},
    {"nome": "Eduardo Messias", "telefone": 998254477},
    {"nome": "Bruno Samp", "telefone": 982475631}];

  constructor() {}

  cadastrar(){
    this.lista_contatos.push({"nome" : this.nome, "telefone" : this.telefone})
  }

}
