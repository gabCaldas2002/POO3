import ITransportFactory from "../transports/interfaces/ITransportFactory";
import IAircraft from "../vehicles/aerial/interface/IAircaft";
import ILandVehicle from "../vehicles/land/interface/ILandVehicle";

export default class Client{
    private vehicle: ILandVehicle;
    private aircraft: IAircraft;

    constructor(factory: ITransportFactory){
        this.vehicle = factory.createTransportVehicle();
        this.aircraft = factory.createTransportAircraft();
    }

    startRoute(): void{
        this.vehicle.startRoute();
        this.aircraft.startRoute();
    }
}