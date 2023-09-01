import Genero from "./Genero";

export class Contato{
    private _id!: string;
    private _nome : string;
    private _telefone : number;
    private _email : string;
    private _genero : Genero;

    constructor(nome: string, telefone: number, email: string, genero: Genero){
        this._nome = nome;
        this._telefone = telefone;
        this._email = email;
        this._genero = genero
    }

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

    /**
     * Getter genero
     * @return {Genero}
     */
	public get genero(): Genero {
		return this._genero;
	}

    /**
     * Setter genero
     * @param {Genero} value
     */
	public set genero(value: Genero) {
		this._genero = value;
	}

    /**
     * Getter email
     * @return {string}
     */
	public get email(): string {
		return this._email;
	}

    /**
     * Setter email
     * @param {string} value
     */
	public set email(value: string) {
		this._email = value;
	}


    /**
     * Getter nome
     * @return {string}
     */
	public get nome(): string {
		return this._nome;
	}

    /**
     * Getter telefone
     * @return {number}
     */
	public get telefone(): number {
		return this._telefone;
	}

    /**
     * Setter nome
     * @param {string} value
     */
	public set nome(value: string) {
		this._nome = value;
	}

    /**
     * Setter telefone
     * @param {number} value
     */
	public set telefone(value: number) {
		this._telefone = value;
	}

}