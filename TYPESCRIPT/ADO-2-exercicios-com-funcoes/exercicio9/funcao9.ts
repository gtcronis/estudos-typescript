import prompt from "prompt-sync";
const ler = prompt();

export function coletarDados() {
  console.log(
    "Vamos escrever a tabuada. Escolha o número: "
  );
  const numero: number = Number(ler());
  return{numero}
}

export function multipilicar(numero:number): string[]{
    const linhas:string[]=[];
  for(let i=0;i<=10;i++){
    linhas.push (`${numero} x ${i} = ${numero * i}`);
  }
    return linhas;
}

export function apresentacaoResultados(numero:number,linhas:string[]):void{
    console.log( `A tabuada do número ${numero} é : `);
    console.log (linhas.join('\n'));
}