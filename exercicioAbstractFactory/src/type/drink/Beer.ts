import IDrink from "./interface/IDrink";

export default class Beer implements IDrink{
    startDelivery(): void {
        this.getOrder();
        console.log("Cerveja: saindo para entrega");
    }
    getOrder(): void {
        console.log("Cerveja: pedido anotado");
    }

}