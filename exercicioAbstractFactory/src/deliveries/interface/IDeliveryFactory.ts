import IDrink from "../../type/drink/interface/IDrink";
import IFood from "../../type/food/interface/IFood";

export default interface IDeliveryFactory{
    createDeliveryDrink(): IDrink;
    createDeliveryFood(): IFood;
}