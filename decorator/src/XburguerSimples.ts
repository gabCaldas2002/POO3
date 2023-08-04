import IXburguer from "./IXburguer";

export default class XburguerSimples implements IXburguer{
    custoBurguer(): number {
        return 5;
    }
    descricao(): string {
        return "Pão, carne, queijo";
    }

}