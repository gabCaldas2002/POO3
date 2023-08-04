import SanduicheBuilder from "./builders/SanduicheBuilder";
import Director from "./directors/Director";
import Sanduiche from "./products/Sanduiche";

const builder : SanduicheBuilder = new SanduicheBuilder();
const director : Director = new Director(builder);

director.constructHotDog();
const hotDog : Sanduiche = builder.getSanduiche();
imprimirDetalhes(hotDog);
director.constructXSalada();
const xSalada : Sanduiche = builder.getSanduiche();
imprimirDetalhes(xSalada);

function imprimirDetalhes(sanduiche : Sanduiche){
    console.log("Sanduiche escolhido: " + sanduiche.sanduicheType);
    console.log("Pão: " + sanduiche.bread);
    console.log("Proteína: " + sanduiche.protein);
    console.log("Salada: " + sanduiche.salad);
    for(let i = 0; i < sanduiche.sauce.length; i++){
        console.log("Molho: " + sanduiche.sauce[i].type);
    }
    console.log("--------------------------------------------------------");
}