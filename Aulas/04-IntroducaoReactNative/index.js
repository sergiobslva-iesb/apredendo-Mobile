// Importando corretamente
import {CalcularIMC,TabelaIMC} from "./CalculadoraIMC.js";
import moment from "moment";

console.log("Projeto rodando");
console.log("Cálculo IMC");
console.log(">>>> Tabela IMC <<<<");

console.table(TabelaIMC);

const peso = 55;
const altura = 1.55;

const resultado = CalcularIMC(peso, altura);

console.log("Resultado do IMC");
console.log(`IMC: ${resultado.toFixed(2)}`);

// Usando moment corretamente
const hoje = moment().locale("pt-br");
console.log(hoje.format("DD/MM/yyyy"));
