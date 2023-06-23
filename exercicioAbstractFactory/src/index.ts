import Client from "./clients/Client"
import AiqfomeDelivery from "./deliveries/AiqfomeDelivery";
import IfoodDelivery from "./deliveries/IfoodDelivery";
import Company from "./deliveries/consts/Company"
import IDeliveryFactory from "./deliveries/interface/IDeliveryFactory";

const currentCompanny = Company.IFOOD;
let factory! : IDeliveryFactory;

switch(currentCompanny){
    case Company.IFOOD:
        factory = new IfoodDelivery();
        break;
    case Company.AIQFOME:
        factory = new AiqfomeDelivery();
        break;
    default:
        console.log("Companhia não definida");
}

const client = new Client(factory);
client.startDelivery();
