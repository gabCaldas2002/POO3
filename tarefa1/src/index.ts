import { Cliente } from "./Cliente";
import { Endereco } from "./Endereco";
import { Produto, Setor } from "./Produto";
import { Telefone } from "./Telefone";
import { Venda } from "./Venda";

let enderecoCliente1 = new Endereco("Rua dr. laranjeiras", 1732, "Guarapuava", "Paraná");
let telefoneCliente1 = new Telefone(44, 389274874, "Celular");
let produto1Cliente1 = new Produto(1, "Ingresso Grêmio x Athletico", 100.00, Setor.Norte);
let produto2Cliente1 = new Produto(2, "Ingresso Grêmio x Athletico", 200.00, Setor.Leste);
let cliente1 = new Cliente("Gabriel Caldas", 92030104672, 20112002, "Masculino", enderecoCliente1, [telefoneCliente1]);

let enderecoCliente2 = new Endereco("Rua Vicente Machado", 221, "Guarapuava", "Paraná");
let telefoneCliente2 = new Telefone(42, 737153718, "Celular");
let produtoCliente2 = new Produto(2, "Ingresso Grêmio x Athletico", 150.00, Setor.Visitante);
let cliente2 = new Cliente("Carlos Iatskiu", 10830309245, 15091903, "Masculino", enderecoCliente2, [telefoneCliente2]);

let venda1 = new Venda(1, 15052023, cliente1, [produto1Cliente1, produto2Cliente1]);
let venda2 = new Venda(2, 10062023, cliente2, [produtoCliente2]);

console.log(venda1.calcularTotal());
console.log(venda2.calcularTotal());