//EXERCÍCIO 1 ++++++++++++++++++++++++++++++++++++++++++++

// O que o código abaixo está fazendo? Qual o resultado impresso no console? 
// let sum = 0
// for(let i = 0; i < 15; i++) {
//   sum += i
// }
// console.log(sum)
// R - o codigo está imprimindo no console numeros de 1 a 14.

//EXERCÍCIO 2 ++++++++++++++++++++++++++++++++++++++++++++
// Leia o código abaixo:

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// const novaLista = []
// const numero = 4

// for(const item of lista){
//   if(item%numero === 0) {
//     novaLista.push(item)
//   }
// }
// console.log(novaLista)

// a. O que o comando `.push` faz?
// R - O push adiciona um novo item ao Array.

// a. O que o comando `.push` faz?
//R - Ele cria uma nova lista para os numeros que são multiplos de 5

//c. Qual **seria** imprimido no console se a variável `numero` tivesse o valor de `3`? E se tivesse o valor de `4`?
// R - Sendo o valor 3 o array seria: [12, 15, 18, 21, 27, 30], e sendo 4 seria: apenas [12]

//EXERCÍCIO 3 ++++++++++++++++++++++++++++++++++++++++++++
// a. Escreva um programa que devolva o maior e o menor números contidos no array original
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let maior = array[0]
// let menor = array[0]

// for(let numero of array){

//     const elemento = numero
//     if(elemento > maior){
//         maior = elemento
//     }else if(elemento < menor){
//         menor = elemento
//     }
// }
// console.log(maior);
// console.log(menor);

// b. Escreva um programa que devolva um novo array contendo todos os valores do array original divididos por 10.
// R -
// const lista = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// const novaLista = []
// const numero = 10

// for(const item of lista){
//   if(item%numero === 0) {
//     novaLista.push(item)
//   }
// }
// console.log(novaLista)
// no console: (9) [80, 30, 130, 40, 60, 70, 120, 90, 110]

// c. Escreva um programa que devolva um novo array contendo, somente, os números pares do array original.
// const lista = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// const novaLista = []
// const numero = 2

// for(const item of lista){
//   if(item%numero === 0) {
//     novaLista.push(item)
//   }
// }
// console.log(novaLista)
// no console: [80, 30, 130, 40, 60, 70, 120, 90, 110]