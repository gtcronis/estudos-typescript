import prompt from 'prompt-sync'
const ler = prompt();

export function coleta(){
    console.log('\n---Ingresso de cinema');
    
    console.log('Informe o tipo de ingresso : Meia ou Inteira?');
    let tipo = ler();

    console.log('Informe a quantidade de ingressos: ');
    let quantidade = Number (ler());

    return {tipo, quantidade};
}

export function calcularTotal(tipo: string, quantidade: number): number{
    const preco = 28.5;
    let total = Number;

    if(tipo.toLocaleLowerCase() === "meia"){
        total = (preco/2) * quantidade;
    }else{
        total = preco * quantidade;
    }
    return total;
    }

export function instrucaoSemaforo(){

    console.log('ATENÇÃO! Qual a cor exibida no semáforo? : ')
    let cor = ler();
    return {cor};
}


export function decisaoSemaforo(cor:string):string{

    if (cor.toLowerCase() === 'verde'){
        return 'Atravesse';
    } 
    else if (cor.toLowerCase() === 'vermelho'){
        return 'Espere';
        

    } else{
       return 'Farol inoperante';
        
    }
 }

