import prompt from "prompt-sync";
const ler = prompt();

export function coletarDados() {
  console.log(
    "Digite um número de 1 a 12 para descobrir o mês correspondente: ",
  );
  let mes = Number(ler());
  return { mes };
}

export function conversaoDados(mes: number): string {
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Marco",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  if (mes >= 1 && mes <= 12) {
    return meses[mes - 1];
  } else {
    return "Mês inválido";
  }
}

export function apresentacaoResultados(mes: number, meses: string): void {
  console.log(`===================`);
  console.log(` O número ${mes}\n`);
  console.log(`Corresponde ao mês: ${meses}`);
  console.log(`===================`);
}
