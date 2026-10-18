import{coletarDados,calcularIntervalo,apresentacaoResultados} from "./funcao4"

const dados= coletarDados();
const intervalo = calcularIntervalo(dados.numeroInicial,dados.numeroFinal);

apresentacaoResultados(dados.numeroInicial,dados.numeroFinal,intervalo);