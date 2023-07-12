import AdvancedGame from "./gameplay/AdvancedPlay";
import Play from "./gameplay/Play";
import IConsole from "./platforms/IConsole";
import Playstation from "./platforms/Playstation";
import Xbox from "./platforms/Xbox";

function startAdvancedPlay(platform: IConsole){
    console.log("Aguarde...");
    const play = new AdvancedGame(platform);
    play.playing();
    play.result();
    play.challenge();
}

function startGame(platform : IConsole){
    console.log("Aguarde...");
    const play = new Play(platform);
    play.playing();
    play.result();
}

startAdvancedPlay(new Xbox());
startGame(new Playstation());