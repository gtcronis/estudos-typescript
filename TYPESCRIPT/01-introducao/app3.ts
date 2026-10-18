import * as funcoes from './funcoes';

// 1. Coleta de dados vindo do funcoes.ts
let { total, desconto, qtdParcelas } = funcoes.coletarDados();

// 2. Chamadas PONTUAIS das funções de cálculo
let final = funcoes.calcularTotalFinal(total, desconto);
let valorParcela = funcoes.calcularParcela(final, qtdParcelas);

// 3. Exibição do resultado final no terminal
console.log('-----------------');
console.log(`Valor da compra: R$ ${total}`);
console.log(`Desconto: R$ ${desconto}`);
console.log(`Total final: R$ ${final}`);
console.log(`Parcelas: ${qtdParcelas}`);
console.log('-----------------');
console.log(`Pago em ${qtdParcelas} x R$ ${valorParcela}`);