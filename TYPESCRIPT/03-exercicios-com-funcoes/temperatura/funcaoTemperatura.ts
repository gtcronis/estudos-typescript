import prompt from "prompt-sync";
const ler = prompt();

export function coletarDados() {
  console.log("Digite a temperatura do paciente: ");
  const temperatura = Number(ler());

  return { temperatura };
}

export function situacao(temperatura: number): string {
  if (temperatura < 36) {
    return "Hipotermia";
  } else if (temperatura >= 36 && temperatura < 37.6) {
    return "Normal";
  } else if (temperatura >= 37.6 && temperatura < 39.6) {
    return "Febre";
  } else if (temperatura >= 39.6 && temperatura < 41) {
    return "Febre Alta";
  } else {
    return "Hipertermia";
  }
}

export function apresentacaoResultados(
  temperatura: number,
  faixas: string,
): void {
  console.log(`===================`);
  console.log(` A temperatura: ${temperatura}\n`);
  console.log(`Indica: ${faixas}`);
  console.log(`===================`);
}
