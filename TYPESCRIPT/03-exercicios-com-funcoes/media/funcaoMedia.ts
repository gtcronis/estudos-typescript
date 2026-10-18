import prompt from "prompt-sync";
const ler = prompt();

export function coletarDados() {
  console.log("Digite a primeira nota: ");
  let n1 = Number(ler());
  console.log("Digite a segunda nota: ");
  let n2 = Number(ler());
  console.log("Digite a terceira nota: ");
  let n3 = Number(ler());

  return { n1, n2, n3 };
}
export function calcularMedia(n1: number, n2: number, n3: number): number {
  let media = (n1 + n2 + n3) / 3;
  return media;
}

export function situacao(media: number): string {
  let veredito: string = "";
  if (media == 0) {
    veredito = "Desistente";
  } else if (media < 3) {
    veredito = "Reprovado";
  } else if (media >= 3 && media < 6) {
    veredito = "Recuperação";
  } else if (media >= 6 && media < 8) {
    veredito = "Aprovado";
  } else {
    veredito = "Aprovado com sucesso";
  }
  return veredito;
}

export function apresentacaoResultados(
  n1: number,
  n2: number,
  n3: number,
  media: number,
  veredito: string,
): void {
  console.log(`
===================
Considerando as notas: ${n1}, ${n2} e ${n3}
A média é: ${media}
Situação: ${veredito}
===================
`);
}
