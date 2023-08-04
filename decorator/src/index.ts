import IXburguer from "./IXburguer";
import XburguerSimples from "./XburguerSimples";
import Alface from "./decorators/Alface";
import Tomate from "./decorators/Tomate";
import Molho from "./decorators/Molho";

let xburguer: IXburguer = new XburguerSimples();
xburguer = new Tomate(xburguer);
xburguer = new Alface(xburguer);
xburguer = new Molho(xburguer);

console.log("Custo do hamburguer: $" + xburguer.custoBurguer());
console.log("Descrição: " + xburguer.descricao());
