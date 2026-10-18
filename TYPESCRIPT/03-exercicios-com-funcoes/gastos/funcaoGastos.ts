import prompt from "prompt-sync";
const ler = prompt();

export function coletarDados(){

    console.log('Para saber sua situação financeira, informe: Qual o total de ganhos nesse mês?: ');
    let ganhos = Number(ler());

    console.log(' E qual o total de gastos nesse mês?: ')
    let gastos = Number(ler());

    return {ganhos,gastos};

}

export function situacaoFamiliar(ganhos:number,gastos:number):string{
  
    if ( ganhos >= gastos){
        return 'Você está dentro do orçamento!'
        
    } else{ 
        return 'Você está fora do orçamento! Não gaste mais';
    }

    
}