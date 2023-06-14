export class Endereco {
    _rua: string;
    _numero: number;
    _cidade: string;
    _estado: string;
  
    constructor(rua: string, numero: number, cidade: string, estado: string) {
      this._rua = rua;
      this._numero = numero;
      this._cidade = cidade;
      this._estado = estado;
    }
  
    public get rua(): string {
      return this._rua;
    }
  
    public get numero(): number {
      return this._numero;
    }
  
    public get cidade(): string {
      return this._cidade;
    }
  
    public get estado(): string {
      return this._estado;
    }
    
    public set rua(rua: string) {
      this._rua = rua;
    }
  
    public set numero(numero: number) {
      this._numero = numero;
    }
  
  
    public set cidade(cidade: string) {
      this._cidade = cidade;
    }
  
    public set estado(estado: string) {
      this._estado = estado;
    }
  }
  