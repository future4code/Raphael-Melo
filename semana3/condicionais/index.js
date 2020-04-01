// // EXERCÍCIO 1 +++++++++++++++++++++++++++++++++++++++++

// // Leia o código abaixo:
// // const respostaDoUsuario = prompt("Digite o número que você quer testar?")
// // const numero = Number(respostaDoUsuario)
// // if (numero % 2 === 0) {
// //     console.log("Passou no teste.")
// // } else {
// //     console.log("Não passou no teste.")
// // }
// // Explique o que o código faz.Qual o teste que ele realiza ? Para que tipos de 
// // números ele imprime no console "Passou no teste" ? Para que tipos, a mensagem é "Não passou no teste" ?
// //R - A primeira const chamada respostaDoUsuario recebe uma resposta do user . a const numero, tenta transformar a 
// //resposta do user em número. Ele só imprime passou no teste para tipos number e que sejam par. Logo ele mostra a mensagem de não passou no teste para numeros impares. 


// // EXERCÍCIO 2 +++++++++++++++++++++++++++++++++++++++++
// // O codigo abaixo foi feito por uma pessoa desenvolvedora, contratada para 
// //automatizar algumas tarefas de um supermercado. Veja abaixo:

// // let fruta = prompt("Escolha uma fruta")
// // let preco
// // switch (fruta) {
// //   case "Laranja":
// //     preco = 3.5
// //     break;
// //   case "Maçã":
// //     preco = 2.25
// //     break;
// //   case "Uva":
// //     preco = 0.30
// //     break;
// //   case "Pêra":
// //     preco = 5.5
// //     break; // BREAK PARA O ITEM d.
// //   default:
// //     preco = 5
// //     break;
// // }

// // console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// //a. Para que serve o código acima?
// //R. Para que o user digite uma fruta e receba o preço.
// //b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// //R. preco = 2.25
// //c. Considere que você vá ao mercado com o objetivo de comprar 2 laranjas, 1 maçã, 3 bananas e 1 uva. Qual seria o preço que você pagaria?
// //R - 2 laranjas = 7 | 1 maça = 2.25 | 3 bananas = 15 | 1 uva = 0.30. Valor a ser pago seria de 24,55 moedas.

// //d. Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do deafult (o break indicado pelo comentário "BREAK PARA O ITEM d.")?
// //R - A resposta seria: preco = 5.5 (preço da pera) preco = 5 (preço definido como default).


// // EXERCÍCIO 3 +++++++++++++++++++++++++++++++++++++++++
// // const numero1 = prompt("Digite o primeiro número.")
// // const numero2 = prompt("Digite o próximo número?")
// //Variaveis para armazenarem o numero digitado pelo usuario, já o convertendo para number.

// // if(numero1 > 0 && numero2 > 0) {
// //Condicional que recebe os numeros.
// //   let mensagem
// //   if(numero1 > numero2) {
// //     mensagem = "Número 1 é maior que o 2!"
// //   } else {
// //     mensagem = "Número 1 é menor ou igual ao 2!"
// //   }
// // }
// // console.log(mensagem)

// // Considere um usuário que digita os números 3 e 4 respectivamente. Qual será a mensagem do terminal? Haverá algum erro? Justifique usando os conceitos de bloco ou escopo.
// // R - A mensagem será a opção else da condicional: "Número 1 é menor ou igual ao 2!". Não haverá erro pois o numero se em questão 
// //passou pelos "testes" de cmparação com booleanos para conferir se eram maior que 0, ambos são então foram para as condicionais, 
// //sendo o primeiro numero menor que o segundo, o retorno seria o exibido no else.


// // EXERCÍCIO 4 +++++++++++++++++++++++++++++++++++++++++

// // Questão A
// // a. Crie um programa que receba dois números do usuário através do `prompt` e imprima-os na ordem **decrescente**. O que acontece com o seu programa se os 2 números forem iguais? (é só testar e colocar um comentário descrevendo o que aconteceu)
// // R - Não ocorreu nada de especiail, ambos apareceram um ao lado do outro. O programinha dessa questão foi reutilizado no exercicio posterios
// // b. Adapte o programa para que o usuário digite 3 números. Ainda os imprima na ordem **decrescente**. O que acontece como seu programa se os 3 números forem iguais? (é só testar e colocar um comentário descrevendo o que aconteceu)
// // R - Definindo 3 numeros iguais, no console os 3 são impressos.

// // c. Agora, impeça que o usuário digite 3 números iguais. Caso todos sejam iguais, mostre um aviso ao usuário indicando que ele deve, ao menos, inserir um número diferente.

// let n1 = Number(prompt("Digite o primeiro numero:"))
// let n2 = Number(prompt("Digite o segundo numero:"))
// let n3 = Number(prompt("Digite o terceiro numero:"))
// //Variaveis para armazenarem o numero digitado pelo usuario, já o convertendo para number.

// // If para que não hajam 3 numeros repetidos
// if (n1 === n2 && n3 === n1) {
//     n3 = Number(prompt("Digite o terceiro numero válido:"));
// }

// let comp = n1 > n2 && n2 > n3 || n1 < n2 && n1 < n3 || n1 < n3 && n1 < n2
// //Variavel de comparação logica (booleana)
// switch (comp) {
//     //Condicional que recebe as comparações.
//     case n1 > n2 && n2 > n3:
//         console.log(n1, n2, n3);
//         break;
//     case n1 < n1 < n2 && n1 < n3:
//         console.log(n3, n2, n1);
//         break;
//     case n1 < n1 < n3 && n1 < n2:
//         console.log(n2, n3, n1);
//         break;
// }

// // EXERCÍCIO 5 +++++++++++++++++++++++++++++++++++++++++
// a. Escreva o diagrama esquemático que melhor represente a árvore condicional do exercício. (Coloque a imagem do esquema no drive e gerem um link de compartilhamento público. Coloque este link num comentário durante a resolução deste exercício)
//DIAGRAMA https://drive.google.com/file/d/1YRN2rUc7i9iLSh2fCgw_vpfmdMGnQBHG/view?usp=sharing
//b. Não consegui entender a questão
