# Taxas de freelancer

Neste exercício, você escreverá código para ajudar um freelancer a se comunicar com seus clientes sobre os preços de determinados projetos. Você escreverá algumas funções utilitárias para calcular rapidamente os custos para os clientes.
<br />
<br />

## 1. Calcule a taxa diária dada uma taxa horária

Um cliente entra em contato com o freelancer para saber sobre suas taxas. O freelancer explica que trabalha 8 horas por dia. No entanto, o freelancer sabe apenas suas taxas horárias (valor que cobra por cada 1 hora trabalhada) para o projeto. Ajude-o a estimar uma taxa diária dada a taxa por hora.

<br />

```js
// Exemplo: recebe 89 reais por hora
dayRate(89); // nesse caso o calculo deve retornar: 712 reais por dia
```

A taxa diária não precisa ser arredondada ou alterada para uma precisão "fixa".
<br />
<br />

## 2. Calcule o número de dias úteis com um orçamento fixo

Outro dia, um gerente de projeto oferece ao freelancer para trabalhar em um projeto com orçamento fixo. Dado o orçamento fixo e a taxa horária do freelancer, ajude-o a calcular o número de dias que ele trabalharia até que o orçamento se esgotasse. O resultado deve ser **arredondado** para o número inteiro mais próximo.

<br />

```js
// Exemplo
daysInBudget(20000, 89); // nesse caso o calculo deve retornar: 28

// Math.floor(45.6) // 45
// Math.ceil(45.6) // 46
// Math.round(45.3) // 45
```

<br />
<br />

## 3. Calcule a taxa de desconto para grandes projetos

Muitas vezes, os clientes do freelancer o contratam para projetos que duram vários meses. Nesses casos, o freelancer decide oferecer um desconto para cada mês completo, e os dias restantes são cobrados à taxa diária. **Cada mês tem 22 dias faturáveis**. Ajude-o a estimar seu custo para esses projetos, considerando uma taxa horária, o número de dias que o projeto abrange e uma taxa de desconto mensal. O desconto é sempre passado como um número, onde _42%_ se torna _0.42_. O resultado deve ser arredondado para o número inteiro mais próximo.

<br />

```js
// Exemplo
priceWithMonthlyDiscount(89, 230, 0.42); // nesse caso o calculo deve retornar: 97972
```
