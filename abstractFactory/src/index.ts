import Client from "./clients/Client";
import NineNineTransport from "./transports/NineNineTransport";
import UberTransport from "./transports/UberTransport";
import Company from "./transports/consts/Company";
import ITransportFactory from "./transports/interfaces/ITransportFactory";

const  currentCompany = Company.UBER;
let factory! : ITransportFactory;

switch(currentCompany){
    case Company.UBER:
        factory = new UberTransport();
        break;
    case Company.NINENINE:
        factory = new NineNineTransport();
        break;
    default:
        console.log("Companhia não definida");
}
const client = new Client(factory);
client.startRoute();
