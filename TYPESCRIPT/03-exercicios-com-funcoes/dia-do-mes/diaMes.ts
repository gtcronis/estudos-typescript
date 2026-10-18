import {
  apresentacaoResultados,
  coletarDados,
  conversaoDados,
} from "./funcaoMes";

const dados = coletarDados();
const mes = conversaoDados(dados.mes);

apresentacaoResultados(dados.mes, mes);
