import IBuilder from "../builders/IBuilder";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";
import Bread from "../components/bread";

export default class Director{
    constructor(private builder : IBuilder){}

    constructHotDog(){
        this.builder.setSanduicheType(SanduicheType.HOT_DOG);
        this.builder.setBread(Bread.BRANCO);
        this.builder.setProtein(Protein.VINA);
        this.builder.setSalad(Salad.PICLES);
        this.builder.addSauce(new Sauce("Ketchup"));
        this.builder.addSauce(new Sauce("Maionese"));
    }

    constructXSalada(){
        this.builder.setSanduicheType(SanduicheType.X_SALADA);
        this.builder.setBread(Bread.TRES_QUEIJOS);
        this.builder.setProtein(Protein.BOVINO);
        this.builder.setSalad(Salad.ALFACE);
        this.builder.addSauce(new Sauce("Barbecue"));
        this.builder.addSauce(new Sauce("Maionese"));
    }
}