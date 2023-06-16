import ILandVehicle from "./interface/ILandVehicle";

export default class Motorcycle implements ILandVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Moto: iniciando entrega")
    }
    getCargo(): void {
        console.log("Moto: encomenda retirada");
    }

}