import ICorreio from "../correio/ICorreio";
import Transportadora from "../transportadora/Transportadora";

export default class TransportadoraAdapter implements ICorreio{

    constructor(private transportadora: Transportadora){
        console.log("Adaptando a transportadora no correio");
    }

    sendCorreios(): void {
        return this.transportadora.send();
    }
    receiveCorreios(): void {
        return this.transportadora.receive();
    }

}