import Game from "./type/game";
import IItem from "./type/interface/IItem";
import Location from "./Location";

export default class GameLocation extends Location{
    protected createItem(): IItem{
        return new Game
    }
}