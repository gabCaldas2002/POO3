import IItem from "./type/interface/IItem";

export default abstract class Location{
    startItem(): void{
        const type = this.createItem();
        type.start();
    }
    
    protected abstract createItem(): IItem;
}