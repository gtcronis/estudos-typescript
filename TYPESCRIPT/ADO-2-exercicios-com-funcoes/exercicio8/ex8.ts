import{coletarDados,desenhar,apresentacaoResultados} from "./funcao8";

const dados = coletarDados();
const imprimir = desenhar(dados.altura,dados.base);

apresentacaoResultados(dados.altura,dados.base,imprimir);