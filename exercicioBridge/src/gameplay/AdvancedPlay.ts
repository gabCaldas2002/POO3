import IConsole from "../platforms/IConsole";
import Play from "./Play";

export default class AdvancedPlay extends Play{
    constructor(platform : IConsole){
        super(platform);
    }

    challenge(): void{
        console.log("Ativando o desafio!!");
    }
}