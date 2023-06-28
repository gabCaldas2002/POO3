export default class Sauce{
    constructor(private _type : String){}

    get type() : String{
        return this._type;
    }

    set type(type : String){
        this._type = type;
    }
}