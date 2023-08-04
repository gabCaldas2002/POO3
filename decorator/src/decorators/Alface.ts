import BurguerDecorator from "./BurguerDecorator";

export default class Alface extends BurguerDecorator{
    custoBurguer(): number {
        return this.xburguer.custoBurguer() + 1;
    }
    descricao(): string {
        return this.xburguer.descricao() + ", alface";
    }
    
}