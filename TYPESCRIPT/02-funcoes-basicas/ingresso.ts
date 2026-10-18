// Implemente um programa  que calcule o total a se pagar pela compra 
// de ingressos de cinema 
//Cada ingresso custa R$ 28,50.
//O usuário  deve informar o tipo dos ingressos (Meia ou Inteira) e a quantidade de ingressos.

import {coleta,calcularTotal} from './funcoes2'
    
const dados = coleta();
const total = calcularTotal(dados.tipo,dados.quantidade);

console.log(`O total a pagar é R$ ${total}`);