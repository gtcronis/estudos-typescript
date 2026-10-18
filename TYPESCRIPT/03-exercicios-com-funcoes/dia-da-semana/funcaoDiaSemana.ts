import prompt from 'prompt-sync';

const ler = prompt();

export function coletarDados (){
    console.log('Cada dia da semana corresponderá a um número. Informe um número e descubra o dia da semana correspondente: ');
    let numero = Number(ler());
    return {numero};
    
}
    export function diaCorrespondente(numero:number):string{
        const dias = ['Domingo','Segunda-feira', 'Terça feira', 'Quarta feira', 'Quinta feira', 'Sexta feira', 'Sábado'];

        if (numero >=0 && numero <=6){
            return dias[numero];
        } else {
            return 'Dia da semana inválido';
        }

    } 