import BurguerDecorator from "./BurguerDecorator";

export default class Tomate extends BurguerDecorator{
    custoBurguer(): number {
        return this.xburguer.custoBurguer() + 2;
    }
    descricao(): string {
        return this.xburguer.descricao() + ", molho";
    }
    
}