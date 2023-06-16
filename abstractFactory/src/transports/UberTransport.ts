import Airplane from "../vehicles/aerial/Airplane";
import IAircraft from "../vehicles/aerial/interface/IAircaft";
import Car from "../vehicles/land/Car";
import ILandVehicle from "../vehicles/land/interface/ILandVehicle";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class UberTransport implements ITransportFactory{
    createTransportVehicle(): ILandVehicle {
        return new Car();
    }
    createTransportAircraft(): IAircraft {
        return new Airplane();
    }
    
}