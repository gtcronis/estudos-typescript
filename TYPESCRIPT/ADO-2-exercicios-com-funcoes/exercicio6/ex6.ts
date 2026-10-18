import {coletarDados,desenhar,apresentacaoResultados} from "./funcao6"

const dados= coletarDados();
const imprimir= desenhar(dados.desenharNum);


apresentacaoResultados(dados.desenharNum,imprimir);