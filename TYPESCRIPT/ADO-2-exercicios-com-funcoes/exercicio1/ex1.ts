import {apresentacaoResultados, coletarDados,contagemAte} from "./funcao"

const dados = coletarDados();
const contar = contagemAte(dados.numero);

apresentacaoResultados(dados.numero,contar);
