# Carrinho de compra

Vamos imaginar que você está desenvolvendo um carrinho de compra.
Desenvolva uma solução onde o carrinho sera uma lista de produtos.
Nosso siteminha não terá front, você irá desenvolver apenas a regra
de manipulação deste carrinho de compra.

## Requisições do sistema

- Nosso carrinho deverá ser uma lista (array) de produtos.
- Nós precisamos de uma solução que receba um produto e adione ele 
no carrinho
- Nós precisamos poder retirar um produto especifico do carrinho
- Nós precisamos poder somar todos os valores dos produtos adicionados
ao carrinho e retorna o total e se o carrinho estiver vazio deve retorna 0

## Regras
- Use OOP ou Programação funcional. A que se sentir melhor.

## Consenso:

1. Nosso produto irá ter a seguinte estrutura de chave: valor ->

```ts
interface Product {
    id: string,
    price: number,
    name: string,
}
```

> neste exemplo usei uma interface em typescript para demostrar como será a estrutura do nosso produto, adapte a liguagem que irá usar


2. Para remover o produto, sua solução deve poder receber um id que representará o produto que deverá ser removido da lista



