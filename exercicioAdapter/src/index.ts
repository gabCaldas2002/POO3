import TransportadoraAdapter from "./adapters/TransportadoraAdapter";
import Correio from "./correio/Correio";
import ICorreio from "./correio/ICorreio";
import ITransportadora from "./transportadora/ITransportadora";
import Transportadora from "./transportadora/Transportadora";

//const encomenda : ICorreio = new Correio();
//const encomenda2 : ITransportadora = new Transportadora();

//encomenda.sendCorreios();
//encomenda.receiveCorreios();

//encomenda2.send();
//encomenda2.receive();

const encomenda : ICorreio = new TransportadoraAdapter(new Transportadora());
encomenda.sendCorreios();
encomenda.receiveCorreios();