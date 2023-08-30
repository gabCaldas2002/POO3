import { Injectable } from '@angular/core';
import { Contato } from '../entities/Contato';
import Genero from '../entities/Genero';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private lista_contatos : Contato[] = []

  constructor() { 
    let c1 : Contato = new Contato("Gabriel Caldas", 999757112, "gabriel@gmail.com", Genero.MASCULINO)
    let c2 : Contato =  new Contato("Bruno Samp", 998254477, "bruno@gmail.com", Genero.NAODECLARAR)
    let c3 : Contato = new Contato("Eduardo Messias", 982475631, "eduardo@gmail.com", Genero.MASCULINO)
    this.lista_contatos.push(c1);
    this.lista_contatos.push(c2);
    this.lista_contatos.push(c3);
  }

  public obterTodos() : Contato[]{
    return this.lista_contatos
  }

  public obterPorIndice(indice : number) : Contato{
    return this.lista_contatos[indice];
  }

  public cadastrar(contato: Contato){
    this.lista_contatos.push(contato);
  }

  public editar(contato : Contato, indice : number){
    this.lista_contatos[indice] = contato;
  }

  public excluir(indice : number){
    this.lista_contatos.splice(indice, 1);
  }
}
