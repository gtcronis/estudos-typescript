import prompt from 'prompt-sync';
const ler = prompt();

export function coletarDados () {
    console.log('A partir de um número escolhido, vamos imprimir de forma regressiva até 1. Escolha o número para iniciar:  ')
    const numero:number = Number(ler());
    return {numero}
}

export function contagemRegressiva(numero:number): number[] {
    const contagem:number[] = [];
    for(let i= numero;i>=1;i--){
        contagem.push(i);
    }
    return contagem;
}

export function apresentacaoResultados(  numero: number,
  contagem: number[],
    ): void {
  console.log(`Para o número ${numero}, a contagem é : `);
  console.log(contagem.join("\n"));
  
}
