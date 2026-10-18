import{coletarDados,calcularIMC,apresentarIMC,apresentacaoResultados} from "./funcaoImc"

const dados = coletarDados();
const calcImc= calcularIMC(dados.altura,dados.peso);
const situacao= apresentarIMC(calcImc);

apresentacaoResultados(dados.altura,dados.peso,calcImc,situacao);