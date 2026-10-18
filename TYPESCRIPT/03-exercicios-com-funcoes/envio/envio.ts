import * as fn from "./funcaoEnvio"

const dados = fn.coletarDados();
const diaSemana= fn.diaCorrespondente(dados.diaSemana);
const nomeMes=fn.conversaoDados(dados.mes);

fn.apresentacaoResultados(diaSemana,dados.diaMes,nomeMes, dados.ano);