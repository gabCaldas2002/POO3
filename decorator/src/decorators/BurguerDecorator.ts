import IXburguer from "../IXburguer";

export default abstract class BurguerDecorator implements IXburguer{
    constructor(protected xburguer: IXburguer){}

    abstract custoBurguer(): number;
    abstract descricao(): string;
}