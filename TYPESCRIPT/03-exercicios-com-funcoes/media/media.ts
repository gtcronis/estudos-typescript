import {calcularMedia,coletarDados,situacao,apresentacaoResultados} from "./funcaoMedia"


const dados=coletarDados();
const media=calcularMedia(dados.n1,dados.n2,dados.n3);
const veredito=situacao(media);

apresentacaoResultados(dados.n1,dados.n2,dados.n3,media,veredito);