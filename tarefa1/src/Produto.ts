export enum Setor{
    Norte,
    Leste,
    Oeste,
    Sul,
    Visitante
}

export class Produto {
    private _codigo: number;
    private _descricao: string;
    private _valor: number;
    private _setor: Setor;
  
    constructor(codigo: number, descricao: string, valor: number, setor: Setor) {
      this._codigo = codigo;
      this._descricao = descricao;
      this._valor = valor;
      this._setor = setor;
    }
  
    public get codigo(): number {
      return this._codigo;
    }
  
    public get descricao(): string {
      return this._descricao;
    }
  
    public get valor(): number {
      return this._valor;
    }

    public get setor(): Setor{
        return this._setor;
    }
  
    public set codigo(codigo: number) {
      this._codigo = codigo;
    }
  
    public set descricao(descricao: string) {
      this._descricao = descricao;
    }
  
    public set valor(valor: number) {
      this._valor = valor;
    }

    public set setor(setor: Setor){
        this._setor = setor;
    }
  }
  