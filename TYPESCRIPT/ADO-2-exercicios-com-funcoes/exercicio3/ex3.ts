import * as fn from "./funcao3"

const dados  = fn.coletarDados();
const intervalo = fn.contar(dados.numeroInicial,dados.numeroFinal);

fn.apresentacaoResultados(dados.numeroInicial,dados.numeroFinal,intervalo);