import {coletarDados,diaCorrespondente} from "./funcaoDiaSemana";

const dados = coletarDados();
const correspondente = diaCorrespondente(dados.numero);

console.log(`O dia da semana correspondente é ${correspondente}`);