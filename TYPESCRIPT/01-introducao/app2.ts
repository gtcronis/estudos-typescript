import prompt from 'prompt-sync'
import * as funcoes from './funcoes.ts'

const ler = prompt();

console.log('\n---- processo de compra ---');

// 1. Leitura normal 
console.log('Olá, informe o valor da compra: ');
let total = Number(ler());

console.log('Informe o valor do cupom de desconto: ');
let desconto = Number(ler());

console.log('Informe a quantidade de parcelas: ');
let qtdParcelas = Number(ler());

// 2. Chamada PONTUAL da função de cálculo:
let final = funcoes.calcularTotalFinal(total, desconto);
let valorParcela = funcoes.calcularParcela(final, qtdParcelas);

// 3. Exibição
console.log('-----------------');
console.log(`Valor da compra: R$ ${total}`);
console.log(`Desconto: R$ ${desconto}`);
console.log(`Total final: R$ ${final}`);
console.log(`Parcelas: ${qtdParcelas}`);
console.log('-----------------');
console.log(`Pago em ${qtdParcelas} x R$ ${valorParcela}`);