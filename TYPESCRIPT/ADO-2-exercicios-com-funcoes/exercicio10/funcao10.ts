import prompt from "prompt-sync";
const ler = prompt();

export function coletarDados() {
  console.log(
    "Vamos soletrar a frase que você escolher. Digite a frase: "
  );
  const frase: string = (ler());
  return{frase}
}

export function soletrar (frase:string): string[]{
    const letras:string[]=[];
  for(const letra of frase){
    letras.push (letra);
  }
    return letras;
}
export function apresentacaoResultados(frase:string,letras:string[]):void{
    console.log( `A frase ${frase} soletrada é : `);
    console.log (letras.join('\n'));
}