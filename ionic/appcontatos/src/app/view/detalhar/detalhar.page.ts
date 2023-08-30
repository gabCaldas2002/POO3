import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contato } from 'src/app/model/entities/Contato';
import Genero from 'src/app/model/entities/Genero';
import { ContatoService } from 'src/app/model/services/contato.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.page.html',
  styleUrls: ['./detalhar.page.scss'],
})
export class DetalharPage implements OnInit {
  contato! : Contato;
  indice! : number;
  nome! : string;
  email! : string
  genero! : Genero
  telefone! : number
  edicao : boolean = true;

  constructor(private actRoute : ActivatedRoute, private contatoService: ContatoService, private router : Router) { }

  ngOnInit() {
    this.actRoute.params.subscribe((parametros) =>{
      if(parametros['indice']){
        this.indice = parametros['indice'];
        this.contato = this.contatoService.obterPorIndice(this.indice);
      }
    });
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
    this.contatoService.editar(novo, this.indice)
    this.router.navigate(['/home'])
  }

  excluir(){
    this.contatoService.excluir(this.indice);
    this.router.navigate(['/home'])
  }

}
