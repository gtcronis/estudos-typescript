# Estudos de TypeScript

Exercícios de TypeScript feitos durante o curso de Análise e Desenvolvimento de Sistemas (ADS).

## Estrutura

- `01-Introducao`: primeiros programas e anotações de estudo em TypeScript
- `02-funcoes-basicas`: introdução a funções
- `03-exercicios-com-funcoes`: exercícios em que cada pasta tem o programa principal e a função correspondente (dia da semana, dia do mês, envio, gastos, IMC, média, sorvete e temperatura)
- `ADO-2-Exercicios-com-funcoes`: exercícios da atividade ADO 2, também com funções

## Tecnologias

- TypeScript
- Node.js
- `prompt-sync`, para ler dados digitados no terminal

## Como rodar

1. Instale o [Node.js](https://nodejs.org).
2. Clone ou baixe este repositório e, dentro da pasta, instale as dependências:

```
npm install
```

3. Execute um exercício com:

```
npx ts-node caminho/do/arquivo.ts
```

Exemplo:

```
npx ts-node 03-exercicios-com-funcoes/imc/imc.ts
```

## Observações

Cada exercício é independente. Nos exercícios com funções, o arquivo principal importa a função que está na mesma pasta, então os dois precisam ficar juntos.
