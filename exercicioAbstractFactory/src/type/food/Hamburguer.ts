import IFood from "./interface/IFood";

export default class Hamburguer implements IFood{
    startDelivery(): void {
        this.getOrder();
        console.log("Hamburguer: saindo para entrega");
    }
    getOrder(): void {
        console.log("Hamburguer: pedido anotado");
    }
    
}