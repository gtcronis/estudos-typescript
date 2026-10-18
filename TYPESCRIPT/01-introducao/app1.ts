import prompt from 'prompt-sync'
const ler = prompt();

console.log('\n---- processo de compra---');

//coleta de dados 
console.log ('Olá , informe o valor da compra: ');
let total = Number(ler());

console.log('Informe o valor do cupom de desconto: ');
let desconto = Number(ler());

console.log('Informe a quantidade de parcelas: ');
let qtdParcelas = Number(ler());

//processamento

let final = total - desconto;
let valorParcelado = final/qtdParcelas;

// saída
console.log(`Valor da compra: R$ ${total}`);
console.log(`Desconto: ${desconto}`);
console.log(`Total com desconto: R$ ${final}`);
console.log(`Parcelas: ${qtdParcelas}`);
console.log('-----------------');
console.log(`Total final: R$ ${final}`);
console.log(`Pago em ${qtdParcelas} x R$ ${valorParcelado}`);
