import IConsole from "../platforms/IConsole";
import IGameplay from "./IGameplay";

export default class Play implements IGameplay{
    constructor(private platform : IConsole){}

    playing(): void {
        console.log("Iniciando a gameplay!");
    }
    result(): void {
        console.log("********* Jogo rodando ***********");
    }
    
}