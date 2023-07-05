import ICorreio from "./ICorreio";

export default class Correio implements ICorreio{
    sendCorreios(): void {
        console.log("Enviando encomenda via correio");
    }
    receiveCorreios(): void {
        console.log("Recebendo encomenda via correio");
    }

}