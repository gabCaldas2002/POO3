import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contato } from 'src/app/model/entities/Contato';
import Genero from 'src/app/model/entities/Genero';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/model/services/firebase.service';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.page.html',
  styleUrls: ['./detalhar.page.scss'],
})
export class DetalharPage implements OnInit {
  contato! : Contato;
  nome! : string;
  email! : string
  genero! : Genero
  telefone! : number
  edicao : boolean = true;

  constructor(private firebase: FirebaseService, private router : Router) { }

  ngOnInit() {
    this.contato = history.state.contato;
    this.nome = this.contato.nome;
    this.telefone = this.contato.telefone;
    this.email = this.contato.email;
    this.genero = this.contato.genero
    console.log(this.contato);
  }

  habilitarEdicao(){
    if(this.edicao){
      this.edicao=false;
    }else{
      this.edicao=true;
    }
  }

  editar(){
    let novo: Contato = new Contato(this.nome, this.telefone, this.email, this.genero)
    this.firebase.update(novo, this.contato.id)
    this.router.navigate(['/home'])
  }

  excluir(){ 
    this.firebase.delete(this.contato.id);
    this.router.navigate(['/home'])
  }

}
