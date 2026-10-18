// Apenas o Processamento com Funções
// A leitura do teclado continua no app1.ts, mas os cálculos matemáticos são isolados em funções dentro do funcoes.ts.

import prompt from 'prompt-sync';
const ler = prompt();
// Coleta de dados no terminal 
export function coletarDados() {
  console.log('\n---- processo de compra ---');

  console.log('Olá, informe o valor da compra: ');
  let total = Number(ler());

  console.log('Informe o valor do cupom de desconto: ');
  let desconto = Number(ler());

  console.log('Informe a quantidade de parcelas: ');
  let qtdParcelas = Number(ler());

  return { total, desconto, qtdParcelas };
}

// Funções de Cálculo (com tipagem : number após os parênteses)

export function calcularTotalFinal (total:number, desconto:number):number{
    let final = total - desconto;
    return final;
}
export function calcularParcela (final: number, qtdParcelas: number): number {
 let valorParcelado = final/qtdParcelas;
 return valorParcelado;
}
