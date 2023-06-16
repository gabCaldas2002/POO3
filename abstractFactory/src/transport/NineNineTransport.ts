import Helicopter from "../vehicles/aerial/Helicopter";
import IAircraft from "../vehicles/aerial/interface/IAircaft";
import Motorcycle from "../vehicles/land/Motorcycle";
import ILandVehicle from "../vehicles/land/interface/ILandVehicle";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class NineNineTransport implements ITransportFactory{
    createTransportVehicle(): ILandVehicle {
        return new Motorcycle();
    }
    createTransportAircraft(): IAircraft {
        return new Helicopter();
    }
    
}