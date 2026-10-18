import { coletarDados,situacaoFamiliar } from "./funcaoGastos";

const dados = coletarDados();
const analise =situacaoFamiliar (dados.ganhos,dados.gastos);

console.log(analise);

