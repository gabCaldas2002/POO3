export class Telefone{

    private _ddd : number;
    private _numero : number;
    private _tipo : string

    constructor (ddd : number, numero : number, tipo : string){
        this._ddd = ddd;
        this._numero = numero;
        this._tipo = tipo;
    }

    get ddd() : number{
        return this._ddd;
    }

    set ddd(ddd: number){
        this._ddd = ddd;
    }

    get numero() : number{
        return this._numero;
    }

    set numero(numero: number){
        this._numero = numero;
    }

    get tipo() : string{
        return this._tipo;
    }
    
    set tipo(tipo: string){
        this._tipo = tipo;
    }

}