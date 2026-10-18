import{coletarDados,multipilicar,apresentacaoResultados} from "./funcao9";

const dados = coletarDados();
const imprimir = multipilicar(dados.numero);

apresentacaoResultados(dados.numero,imprimir);