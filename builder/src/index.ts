import VehicleBuilder from "./builders/VehicleBuilder";
import Director from "./directors/Director";
import Vehicle from "./products/Vehicle";

const builder : VehicleBuilder = new VehicleBuilder();
const director : Director = new Director(builder);

director.constructSedanCar();
const sedan : Vehicle = builder.getVehicle();
imprimirDetalhes(sedan);
director.constructTruck();
const truck: Vehicle = builder.getVehicle();
imprimirDetalhes(truck);

function imprimirDetalhes(vehicle: Vehicle){
    console.log("Construindo veículo: " + sedan.vehicleType);
    console.log("Potência: " + sedan.engine.power);
    console.log("Transmissão: " + sedan.transmission);
    console.log("Assentos: " + sedan.seats);
    console.log("Rodas: " + sedan.wheels.length + " aro " + sedan.wheels[0].rim);
    console.log("---------------------------------------------------------------");
}