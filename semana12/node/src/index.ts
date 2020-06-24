// Exercicio 1
/*
a - Como fazemos para acessar os parâmetros passados na linha de comando para o node?
Criamos uma variavel e atribuimos um tipo, essa variavel armazena process.argv[].

b - Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:
   
    const myName: string = process.argv[2];
    const myAge: number = Number(process.argv[3]);

    console.log(`Olá, ${myName}! Você tem ${myAge} anos.`);

c - c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.   
  
    const myName: string = process.argv[2];
    const myAge: number = Number(process.argv[3]);
    const em7Anos: number = myAge + 7;

    console.log(`Olá, ${myName}! Você tem ${myAge} anos. Em sete anos você terá ${em7Anos}`);

    */
// Exercicio 2

/*
    Crie uma aplicação Node que recebe uma string representando uma operação
    matemática e dois valores numéricos. O retorno deverá ser o resultado da
    operação selecionada utilizando os 2 valores fornecidos.


const operand: string = (process.argv[2])
const n1: number = Number(process.argv[3])
const n2: number = Number(process.argv[4])

function calc(operand: string, n1: number , n2: number): any {

    if(operand === "som"){
        return console.log(n1 + n2)
    }else if(operand === "sub"){
        return console.log(n1 - n2)
    }else if(operand === "div"){
        return console.log(n1 / n2)
    }else(operand === "mul" );{
        return console.log(n1 * n2)
    };
    
}
console.log(calc(operand, n1, n2))
*/
