import { Endereco } from "./Endereco";
import { Telefone } from "./Telefone";

export class Cliente{

  private _nome : string;
  private _cpf : number;
  private _data_nascimento : number;
  private _sexo : string
  private _endereco : Endereco
  private _telefone : Telefone[];
  

    constructor(nome: string, cpf: number, data_nascimento: number, sexo: string, endereco: Endereco, telefone: Telefone[]) {
    this._nome = nome;
    this._cpf = cpf;
    this._data_nascimento = data_nascimento;
    this._sexo = sexo;
    this._endereco = endereco;
    this._telefone = telefone;
  }

  get nome() : string{
    return this._nome;
  }
    
  set nome(nome : string){
    this._nome = nome;
  }

  get cpf() : number{
    return this._cpf;
  }
    
  set cpf(cpf : number){
    this._cpf = cpf;
  }

  get dataNascimento() : number{
    return this._data_nascimento;
  }
    
  set dataNascimento(data_nascimento : number){
    this._data_nascimento = data_nascimento;
  }

  get sexo() : string{
    return this._sexo;
  }
    
  set sexo(sexo : string){
    this._sexo = sexo;
  }

  get endereco() : Endereco{
    return this._endereco;
  }

  set endereco(endereco : Endereco){
    this._endereco = endereco;
  }

  get telefone(): Telefone[] {
    return this._telefone;
  }

  set telefone(value: Telefone[]) {
    this._telefone = value;
  }

}