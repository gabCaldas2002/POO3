import IFood from "./interface/IFood";

export default class HotDog implements IFood{
    startDelivery(): void {
        this.getOrder();
        console.log("Hot dog: saindo para entrega")
    }
    getOrder(): void {
        console.log("Hot dog: pedido anotado");
    }

}