import {coletarDados,situacao,apresentacaoResultados} from "./funcaoTemperatura"

const interacao=coletarDados();
const afericao=situacao(interacao.temperatura);

apresentacaoResultados(interacao.temperatura,afericao);