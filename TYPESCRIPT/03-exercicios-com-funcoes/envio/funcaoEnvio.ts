export function coletarDados() {
  console.log("Para registrar a data completa do envio, informe o dia do mês: ");
  const diaMes = Number(ler());
  console.log(" Informe o dia da semana (em número): ");
   const diaSemana = Number(ler());
  console.log(" Informe o mês (em número): ");
   const mes = Number(ler());
  console.log(" Informe o ano: ");
   const ano = Number(ler());

  return {diaMes,diaSemana,mes,ano};
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

export function diaCorrespondente(numero:number):string{
        const diaSemana = ['Domingo','Segunda-feira', 'Terça feira', 'Quarta feira', 'Quinta feira', 'Sexta feira', 'Sábado'];

        if (numero >=0 && numero <=6){
            return diaSemana[numero];
        } else {
            return 'Dia da semana inválido';
        }

    } 

  export function apresentacaoResultados(
  diaSemana: string,
  diaMes: number,
  mes: string,
  ano:number
  ): void {
  console.log(`
===================
Enviado ${diaSemana}, ${diaMes} de ${mes} de ${ano}
===================
`);
}