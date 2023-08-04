import IDeliveryFactory from "../deliveries/interface/IDeliveryFactory";
import IDrink from "../type/drink/interface/IDrink";
import IFood from "../type/food/interface/IFood";

export default class Client{
    private food: IFood;
    private drink: IDrink;

    constructor(factory: IDeliveryFactory){
        this.drink = factory.createDeliveryDrink();
        this.food = factory.createDeliveryFood();
    }

    startDelivery(): void{
        this.drink.startDelivery();
        this.food.startDelivery();
    }
}