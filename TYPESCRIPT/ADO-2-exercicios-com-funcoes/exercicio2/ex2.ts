import {apresentacaoResultados, coletarDados,contagemRegressiva} from "./funcao2"

const dados=coletarDados();
const contagemReg =contagemRegressiva (dados.numero);

apresentacaoResultados(dados.numero,contagemReg);
