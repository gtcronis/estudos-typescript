import prompt from "prompt-sync";
const ler = prompt();

export function coletarDados() {
  console.log(
    "Vamos desenhar u a forma de um quadrado, partindo do número correspondente ao lado. Digite o número: "
      );
  const lado: number = Number(ler());
 
  return {lado};
}
export function desenhar(lado: number): string[] {
  const linhas :string[] = [];
  for (let i =0;i<lado; i++) {
    const pontos:string[]=[];
  for (let j=0;j<lado;j++){  
    pontos.push("*");
}
linhas.push(pontos.join(' '));
  }
  return linhas;
}

export function apresentacaoResultados(lado:number,linhas:string[]):void{
    console.log(`Para o número: ${lado}, a linha é: `);
    console.log(linhas.join('\n'));
}