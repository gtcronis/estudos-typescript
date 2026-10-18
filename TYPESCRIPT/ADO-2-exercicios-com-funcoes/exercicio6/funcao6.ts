import prompt from "prompt-sync";
const ler = prompt();

export function coletarDados() {
  console.log(
    "Vamos desenhar uma linha a partir da quantidade de pontos que a compoem partindo de um número escolhido. Digite o número: "
      );
  const desenharNum: number = Number(ler());
 
  return {desenharNum};
}
export function desenhar(desenharNum: number): string {
  const pontos:string[] = [];
  for (let i =0;i<desenharNum; i++) {
    pontos.push("*");
}
  return pontos.join(' ');
}

export function apresentacaoResultados(desenharNum:number,pontos:string):void{
    console.log(`Para o número: ${desenharNum}, a linha é: `);
    console.log(pontos);
}