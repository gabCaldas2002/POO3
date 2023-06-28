import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";
import Bread from "../components/bread";
import Sanduiche from "../products/Sanduiche";
import IBuilder from "./IBuilder";

export default class SanduicheBuilder implements IBuilder{
    private sanduiche = new Sanduiche;
    reset(): void {
        this.sanduiche = new Sanduiche;
    }
    getSanduiche(): Sanduiche {
        const result : Sanduiche = this.sanduiche;
        this.reset();
        return result;
    }
    setSanduicheType(tipo: SanduicheType) {
        this.sanduiche.sanduicheType = tipo;
    }
    setBread(bread: Bread) {
        this.sanduiche.bread = bread;
    }
    setProtein(protein: Protein) {
        this.sanduiche.protein = protein;
    }
    setSalad(salad: Salad) {
        this.sanduiche.salad = salad;
    }
    addSauce(sauce: Sauce) {
        this.sanduiche.addSauce(sauce);
    }

}