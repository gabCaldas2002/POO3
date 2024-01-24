import Portas from "./Portas";

export class Carro{
    private _id!: string;
    private _modelo : string;
    private _marca : string;
    private _cor : string;
    private _ano : number;
    private _potencia : number;
    private _porta : Portas;
    private _downloadURL : any;
    private _uid!: string;


    constructor(modelo: string, marca: string, cor: string, ano: number, potencia: number, porta: Portas){
        this._modelo = modelo;
        this._marca = marca;
        this._cor = cor;
        this._ano = ano;
        this._potencia = potencia;
        this._porta = porta;
    }

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

    /**
     * Getter modelo
     * @return {string}
     */
	public get modelo(): string {
		return this._modelo;
	}

    /**
     * Getter marca
     * @return {string}
     */
	public get marca(): string {
		return this._marca;
	}

    /**
     * Getter cor
     * @return {string}
     */
	public get cor(): string {
		return this._cor;
	}

    /**
     * Getter ano
     * @return {number}
     */
	public get ano(): number {
		return this._ano;
	}

    /**
     * Getter potencia
     * @return {number}
     */
	public get potencia(): number {
		return this._potencia;
	}

    /**
     * Setter modelo
     * @param {string} value
     */
	public set modelo(value: string) {
		this._modelo = value;
	}

    /**
     * Setter marca
     * @param {string} value
     */
	public set marca(value: string) {
		this._marca = value;
	}

    /**
     * Setter cor
     * @param {string} value
     */
	public set cor(value: string) {
		this._cor = value;
	}

    /**
     * Setter ano
     * @param {number} value
     */
	public set ano(value: number) {
		this._ano = value;
	}

    /**
     * Setter potencia
     * @param {number} value
     */
	public set potencia(value: number) {
		this._potencia = value;
	}

    /**
     * Getter porta
     * @return {Portas}
     */
	public get porta(): Portas {
		return this._porta;
	}
    /**
     * Setter porta
     * @param {Portas} value
     */
	public set porta(value: Portas) {
		this._porta = value;
	}

	public get downloadURL(): any {
		return this._downloadURL;
	}

	public set downloadURL(downloadURL: any) {
		this._downloadURL = downloadURL;
    }

    public get uid(): string{
        return this._uid;
      }
    
      public set uid(value: string){
        this._uid = value;
      }

   

}