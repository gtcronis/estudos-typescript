import{coletarDados,soletrar,apresentacaoResultados} from "./funcao10"

const dados= coletarDados();
const letraPorletra =soletrar(dados.frase);

apresentacaoResultados(dados.frase,letraPorletra);