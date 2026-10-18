import prompt from "prompt-sync";
const ler = prompt();

export function coletarDados() {
  console.log(
    "Vamos escrever os números naturais no intervalo que você definir. Escolha o número inicial: ",
  );
  const numeroInicial: number = Number(ler());
  console.log(
    "Vamos escrever os números naturais no intervalo que você definir. Escolha o número final : ",
  );
  const numeroFinal: number = Number(ler());

  return { numeroInicial, numeroFinal };
}

export function contar(numeroInicial: number, numeroFinal: number): number[] {
  const contagem: number[] = [];
  for (let i = numeroInicial; i <= numeroFinal; i++) 
    contagem.push(i);
  return contagem;
}

export function apresentacaoResultados(
  numeroInicial: number,
  numeroFinal: number,
  contagem: number[],
): void {
  console.log(
    `Para o número inicial: ${numeroInicial} e o número final: ${numeroFinal} o intervalo é: `,
  );
  console.log(contagem.join("\n"));
}
