import { coletarDados,precoSorvete } from "./funcaoSorvete";

const dados = coletarDados();
const pagamento = precoSorvete(dados.quantidade);

if(typeof pagamento ==='number'){
console.log(`O valor a ser pago é R$ ${pagamento}`);

}else{
    console.log(pagamento)
}