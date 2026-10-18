import prompt from 'prompt-sync';
const ler=prompt();

export function coletarDados(){
    console.log('A partir de um número escolhido, vamos imprimir de forma regressiva o intervalo entre o número inicial e o final. Escolha o número inicial: ');
    const numeroInicial:number = Number(ler());

    let numeroFinal:number;
    do{
    console.log('Escolha o número final: ');
     numeroFinal= Number(ler());

     if(numeroFinal>=numeroInicial){
        console.log('ERRO! O número final deve ser menor do que o número inicial.Tente outra vez.');
     }
     
    }while (numeroFinal>=numeroInicial)

    return{numeroInicial,numeroFinal}
}

export function calcularIntervalo(numeroInicial:number,numeroFinal:number):number[]{
    const intervalo:number[] = [];
    for(let i=numeroInicial;i>=numeroFinal;i--){
    intervalo.push(i);
    }
    return intervalo;

}

export function apresentacaoResultados(numeroInicial:number,numeroFinal:number,intervalo:number[]):void{
    console.log(`Para o número inicial: ${numeroInicial} e o número final: ${numeroFinal} escolhidos, o intervalo é: `)
    console.log(intervalo.join("\n"));

}