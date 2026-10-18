import prompt from 'prompt-sync';
const ler = prompt();

export function coletarDados() {
  console.log("Para descobrir seu IMC, digite sua altura(m): ");
  const altura = Number(ler().replace(",","."));
  console.log(" Digite seu peso(kg) : ")
   const peso = Number(ler());

  return {altura,peso};
}

  
  export function calcularIMC(altura:number, peso:number):number{

    let imc= peso / (altura * altura);
    return Number (imc.toFixed(2));
  }


  export function apresentarIMC(imc:number):string{
    let situacaoImc:string="";

    if (imc < 18.5) {
    situacaoImc = "Abaixo do peso";
  } else if (imc>= 18.5 && imc <= 24.9) {
    situacaoImc = "Peso Normal";
  } else if (imc>=25 && imc <=29.9 ) {
    situacaoImc = "Sobrepeso";
  } else if (imc>=30 && imc <=34.9) {
    situacaoImc = "Obesidade grau I";
  } else if (imc>=35 && imc <=39.9) {
    situacaoImc = "Obesidade grau II";
 
  } else {
    situacaoImc ="Obesidade grau III"
  }
  return situacaoImc;
}

  
  export function apresentacaoResultados(
  altura: number,
  peso: number,
  imc: number,
  situacaoImc: string
  ): void {
  console.log(`
===================
Considerando as altura: ${altura} e o peso ${peso} 
Seu IMC é: ${imc}
Situação: ${situacaoImc}
===================
`);
}

