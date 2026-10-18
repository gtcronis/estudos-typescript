import prompt from "prompt-sync";
const ler = prompt();

export function coletarDados() {
  console.log(
    "Vamos desenhar a forma de um retângulo, partindo do número correspondente a altura e da base. Digite a altura: "
      );
  const altura: number = Number(ler());
  console.log(
    "Digite a base: "
      );
  const base: number = Number(ler());
 
  return {altura,base};
}
export function desenhar(altura: number,base:number): string[] {
  const linhas :string[] = [];
  for (let i =0;i<altura; i++) {
    const pontos:string[]=[];
  for (let j=0;j<base;j++){  
    pontos.push("*");
}
linhas.push(pontos.join(' '));
  }
  return linhas;
}

export function apresentacaoResultados(base:number,altura:number,linhas:string[]):void{
    console.log(`Para a base: ${base} e a altura ${altura} o retângulo é: `);
    console.log(linhas.join('\n'));
}