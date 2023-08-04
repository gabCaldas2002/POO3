import Beer from "../type/drink/Beer";
import IDrink from "../type/drink/interface/IDrink";
import Hamburguer from "../type/food/Hamburguer";
import IFood from "../type/food/interface/IFood";
import IDeliveryFactory from "./interface/IDeliveryFactory";

export default class AiqfomeDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        return new Beer();
    }
    createDeliveryFood(): IFood {
        return new Hamburguer();
    }

}