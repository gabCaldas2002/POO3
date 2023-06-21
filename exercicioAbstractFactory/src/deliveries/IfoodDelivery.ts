import SoftDrink from "../type/drink/SoftDrink";
import IDrink from "../type/drink/interface/IDrink";
import HotDog from "../type/food/HotDog";
import IFood from "../type/food/interface/IFood";
import IDeliveryFactory from "./interface/IDeliveryFactory";

export default class IfoodDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        return new SoftDrink();
    }
    createDeliveryFood(): IFood {
        return new HotDog();
    }
    
}