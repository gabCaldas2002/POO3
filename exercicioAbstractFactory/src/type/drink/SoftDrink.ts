import IDrink from "./interface/IDrink";

export default class SoftDrink implements IDrink{
    startDelivery(): void {
        this.getOrder();
        console.log("Refri: saindo para entrega");
    }
    getOrder(): void {
        console.log("Refri: pedido anotado");
    }

}