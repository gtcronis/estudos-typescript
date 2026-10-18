import prompt from 'prompt-sync';
const ler = prompt();

export function coletarDados() {
  console.log("Vamos descobrir quais os números naturais são antecessores ao número que você escolher. Digite um número: ");
  const numero= Number(ler());
  return {numero}
}

export function contagemAte (numero: number): number [] {
    const sequencia:number[]=[];
    for (let i = 1; i <= numero; i++) {
        sequencia.push(i);
        }
        return sequencia;
        
}

export function apresentacaoResultados(
  numero: number,
  sequencia: number[],
  
  ): void {
  console.log(`Para o número ${numero}, a contagem é : `);
  console.log(sequencia.join("\n"));
  }