import MovieLocation from "./location/MovieLocation";
import GameLocation from "./location/GameLocation";
import Location from "./location/Location";

declare var process;
let location: Location;

if(process.argv.includes("jogar")){
    location = new GameLocation();
    location.startItem();
}else if(process.argv.includes("assistir")){
    location = new MovieLocation();
    location.startItem();
}else{
    console.log("Inválido, você só pode assistir ou jogar")
}