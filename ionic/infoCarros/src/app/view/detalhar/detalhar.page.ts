import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carro } from 'src/app/model/entities/Carro';
import Portas from 'src/app/model/entities/Portas';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/model/service/firebase.service';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.page.html',
  styleUrls: ['./detalhar.page.scss'],
})
export class DetalharPage implements OnInit {
  carro! : Carro;
  modelo! : string;
  marca! : string;
  cor! : string;
  ano! : number;
  potencia! : number;
  porta! : Portas
  edicao : boolean = true;
  public imagem: any

  constructor(private firebase: FirebaseService, private router : Router) { }

  ngOnInit() {
    this.carro = history.state.carro;
    this.modelo = this.carro.modelo;
    this.marca = this.carro.marca;
    this.cor = this.carro.cor;
    this.ano = this.carro.ano;
    this.potencia = this.carro.potencia;
    this.porta = this.carro.porta;
    console.log(this.carro);
  }

  public uploadFile(imagem: any){
    this.imagem = imagem.files;
  }

  habilitarEdicao(){
    if(this.edicao){
      this.edicao=false;
    }else{
      this.edicao=true;
    }
  }

  editar(){
    let novo: Carro = new Carro(this.modelo, this.marca, this.cor, this.ano, this.potencia, this.porta)
    if(this.imagem){
      this.firebase.uploadImage(this.imagem, novo);
    }else{
      novo.downloadURL = this.carro.downloadURL;
      this.firebase.update(novo, this.carro.id);
    }
    this.firebase.update(novo, this.carro.id)
    this.router.navigate(['/home'])
  }

  excluir(){ 
    this.firebase.delete(this.carro.id);
    this.router.navigate(['/home'])
  }

}
