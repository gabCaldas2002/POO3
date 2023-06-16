import IAircraft from "../../vehicles/aerial/interface/IAircaft";
import ILandVehicle from "../../vehicles/land/interface/ILandVehicle";

export default interface ITransportFactory{
    createTransportVehicle(): ILandVehicle;
    createTransportAircraft(): IAircraft;
}