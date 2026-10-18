import prompt from "prompt-sync";
const ler = prompt();

export function coletarDados() {
  console.log(
    "Vamos escrever os números naturais PARES no intervalo que você definir. Escolha o número inicial: "
  );
  const numeroInicial: number = Number(ler());
  let numeroFinal:number;
    do{
  console.log(
    "Escolha o número final : "
  );
    numeroFinal = Number(ler());
    if(numeroInicial>=numeroFinal){
        console.log ('ERRO! O número final deve ser maior do que o número inicial.Tente outra vez.');
    }
    }while (numeroInicial>=numeroFinal);
        return { numeroInicial, numeroFinal };
}
    
export function imprimirPares(numeroInicial:number,numeroFinal:number):number[]{
    const contaPar:number[]=[];
    for( let i =numeroInicial;i<=numeroFinal;i++){
    if (i % 2==0){
        contaPar.push(i);
        
    }
}
return contaPar;
}

export function apresentacaoResultados(numeroInicial:number,numeroFinal:number,contaPar:number[]):void{
    console.log(`Para o número inicial: ${numeroInicial} e o número final: ${numeroFinal} escolhidos, os números pares são: `)
    console.log(contaPar.join("\n"));

}