/*
AULA 14

1. No código temos uma função que deve receber como parametro() um number. Desntro do escopo da função temos uma const que trata o parametro recebido,
só aceitando se for number. E Posteriormente temos um return que concatena uma string com a multiplicação da conta entre o valor em dolar e cotaçao.

Por fim atribui a uma variavel a função e a chama com o parametro(100).

No console o resultado será o valor da cotação (que o usuario deve digitar no promp) x o valor do parametro dado a função. 


2. No codigo temos uma função nomeada que recebe dois parametros (tipoDeInvestimento, valor). No escopo dessa função temos uma variavel chamada 
valorAposInvestimento que não recebe nada. Na função um loop do tipo switch confere se um dos caso é true, caso seja ele atribui um valor a variavel
valorAposInvestimento que é multiplicado por uma taxa de juros de acordo com o caso em que caia. No fim do loop ele tem um default, que retorna uma alert.

Ao ser chamada a função retorna (return) o valor da variavel valorAposInvestimento


3. Nesse exercicíos temos 3 variaveis no escopo global que recevem arrays como valor. A primeira é a numeros que recebe u array de numeros e as demais tem
arrays vazios. Logo após temos um loop do tipo for of que tem como parametros os elementos do array numeros. Dentro do loop temos um if que a cada rodada
do for of verifica se o numero é par, se for ele atribui a variavel array1. Senão ele atribui ao array2.

Por fim temos o primeiro console.log que exibe no
console.log uma string concatenada com o o numero de elementos do array numeros. O segundo imprimi o tatal de arrays do array1 e o segundo faz o mesmo quanto
ao array2. 


4. Nesse trecho de código temos uma const que recebe um array de numeros e duas lets que uma recebe como valor infinito e outra recebe 0. Um loop for of que
compara se os elementos do array Numeros é menor que o infinito, se sim, atribue ao esse valor. E outro if que verifica os elementos do array de Numeros se 
algum é maior que o valor da variavel numero2; 

Por fim ele vai imprimir no console duas vezes. Primeiro> 1590 | E depois: -10

- **Exercícios de lógica de programação** 

1.

a) `false`
b) 'true' 
c) `true'
d) 'true' 
e) 'true'

2. Travei
 
3. 
function tri(a,b,c){
    if(a === b && b === c){
        console.log("Esse é um triangulo Equilátero")
    }
    else if(a !== b && b!==c && a !== c){
        console.log("Esse é um triangulo Escaleno")
    }
    else if(a === b && b!==c || a !==b && b === c || a===c && b !== a){
        console.log("Esse é um triangulo Isósceles")
    }
    
}


4.   
const maiorEntre = (a, b) => {
    let numeroA = a
    let numeroB = b
    let oMaior

    if(numeroA>numeroB){
        oMaior = a
        console.log("O maior é:" , oMaior)
    }else if (a<b){
        oMaior = b
        console.log("O maior é:" , oMaior)

    }else{
        console.log("numeros iguais")
    }
}
  
maiorEntre(2,3)

//============


//ii. 
const divisiveisEntre = (a, b) => {
    let numeroA = a
    let numeroB = b
 
    if(numeroA%numeroB=== 0){
        console.log(numeroA,"é dividido por", numeroB)
    }else{
        console.log(numeroA,"Não são divisiveis",numeroB)
    }
}
  
divisiveisEntre(2,2)

//==========


//iii. 
const diferencaEntre = (a, b) => {
    let numeroA = a
    let numeroB = b
    let diferenca
 
    if(numeroA, numeroB){
        diferenca = numeroA - numeroB
        console.log("A diferença entre eles é", Math.abs(diferenca))
    }else{
        console.log("São Iguais")
    }
}
  
diferencaEntre(2,3)


*/ 
/*
AULA 15

1. TRAVADO

const array = (meuArray = [1,2,3,4,5]) => {
    let segundoMaior
    let segundoMenor

    for(let num of meuArray){
        segundoMaior = 
    }

}
array()



//


2.

let ola = function (){
    alert("HelloFuture4")
}

ola()


**Exercícios de Objetos**

1.  

Arrays são estruturas que permitem salvar mais de um valor a uma variavel. 
Objetos são estruturas que permitem representar dados mais completos como por exemplo arrays, functions...


2. 

let criarRetangulo = (lado1, lado2) => {
    const retanguulo = {
        largura: lado1,
        altura: lado2,
        perimetro: (2* (lado1 + lado2)),
        area: (lado1 * lado2) 
    }
    return retanguulo;
}

*/

