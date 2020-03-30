/* EXERCÍCIO 1.

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado)

false

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado)

true

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)

true

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado)

false

console.log("e. ", typeof resultado)

boolean

+++++++ EXERCÍCIO 2.

let array
console.log('I. ', array)

array = null
console.log('II. ', array)


array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length)

let i = 0
console.log('IV. ', array[i], " e ", array[i+1])

array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor)

i+=1
array[i] = array[i-1]
console.log('VI. ', array[i])

i = array.length - 1
array[i] = array[i-3]
const resultadoC = array[i]%array[1]
console.log('VII. ', resultadoC)
-------------------
RESPOSTAS: 

a. O que é `array` e como se declara em `JS`?
R - Array é um objeto javascript que armazena mais de um valor, ele é do tipo objeto e sua declaração é feita assim: meuArray [1, 2, 3]

b. Qual o index inicial de um `array`?
R - O indice inicial é 0.

c. Como se determinar o tamanho do `array`?
R - array.length

d. Indique todas as mensagens impressas no console.
R - 
I.  undefined
II.  null
III.  11
IV.  3  e  4
V.  19  e  9
VI.  3
VII.  1

*/




//Exercícios de escrita de código

// Exercicio A
// let fahKel = (77 - 32)*5/9 + 273.15
// console.log(fahKel+"ºk" )
// B
// let celFah = (80)*9/5 + 32
// console.log(celFah + "ºf")
// C
// let celFah2 = (30)*9/5 + 32
// let fahkel2 = (celFah2 - 32)*5/9 + 273.15
// D
// console.log("O valor de 30ºC em Fahrenheit é ", celFah2 , "ºF. Já os mesmos 30º em Kelvin é", fahkel2)
// E
// let valorCel = prompt("Digite a temperatura que desajá converter?");
// let c2F = (valorCel)*9/5 + 32
// let f2K = (c2F - 32)*5/9 + 273.15
// console.log("Sua temperatura em Fahrenheit é" , c2F,"ºF . Já em Kelvin é " , f2K, "ºk.")




const nome = prompt("Qual seu nome?");
console.log("Qual seu nome? \nResposta:" , nome)

const sobreNome = prompt("Qual seu sobrenome?");
console.log("Qual seu sobrenome? \nResposta:" , sobreNome)


const idade = prompt("Qual sua idade?");
console.log("Qual sua idade? \nResposta: " , idade)

const esporte = prompt("QUal é seu esporte preferido?");
console.log("QUal é seu esporte preferido?\nResposta: " , esporte)

const cidade = prompt("Qual sua cidade?");
console.log("Qual sua cidade? \nResposta: " , cidade)
