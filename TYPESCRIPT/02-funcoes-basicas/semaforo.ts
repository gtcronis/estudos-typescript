import { decisaoSemaforo,instrucaoSemaforo } from "./funcoes2";

const dados = instrucaoSemaforo();
const comando = decisaoSemaforo(dados.cor);

console.log(`De acordo com o semáfaro: ${comando}`);