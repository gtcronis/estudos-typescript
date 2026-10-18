import{coletarDados,desenhar,apresentacaoResultados} from "./funcao7";

const dados = coletarDados();
const imprimir = desenhar(dados.lado);

apresentacaoResultados(dados.lado,imprimir);