import IItem from "./type/interface/IItem";
import Location from "./Location";
import Movie from "./type/movie";

export default class MovieLocation extends Location{
    protected createItem(): IItem{
        return new Movie
    }
}