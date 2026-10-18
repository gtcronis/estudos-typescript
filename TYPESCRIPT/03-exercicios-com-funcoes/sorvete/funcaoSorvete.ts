import prompt from 'prompt-sync';
const ler = prompt();

export function coletarDados(){
    console.log('para saber o valor a ser pago, informe a quantidade em gramas de sorvete que deseja comprar: ')
    let quantidade = Number(ler());
    return{quantidade};
}

export function precoSorvete(quantidade:number): number | string{
       
        if (quantidade <= 0){
            return 'Peso Inválido';
        }

        let preco100g = 3.50;
        if (quantidade >=1000){
            preco100g = 3.00;

                }
                
        let pagamento = (quantidade/100) * preco100g;
        return pagamento;

    }

    //` O valor a ser pago é R$ ${pagamento}`