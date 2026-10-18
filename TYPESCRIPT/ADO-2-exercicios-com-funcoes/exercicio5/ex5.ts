import {coletarDados,imprimirPares,apresentacaoResultados} from "./funcao5"

const dados= coletarDados();
const nPares = imprimirPares(dados.numeroInicial,dados.numeroFinal);

apresentacaoResultados(dados.numeroInicial,dados.numeroFinal,nPares);