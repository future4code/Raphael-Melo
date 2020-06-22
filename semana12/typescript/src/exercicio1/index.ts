//Exercico A

const minhaString: string = "Variavel do tipo string " // 12 (number) por exemplo dá erro;
//O que acontece? Ao atribuir um number a uma variavel do tipo string o VS code reclama que a variavel minhaString é do type String;

//Exercico B

const meuNumero: number = 26; //Essa variavel só aceita numeros. Podemos colocar (numer | string) como type e assim ela poderá receber tanto string como number;

//Exercico C

type pessoa = {
    name: string,
    age: number,
    corFavorita: colorsRainbow
}

//Exercico E

enum colorsRainbow {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul", 
    ANIL = "anil", 
    VIOLETA = "violeta"
}

let corFavorita = colorsRainbow;

//Exercico D


const person01: pessoa ={
    name: "Alice",
    age: 19,
    corFavorita: colorsRainbow.AMARELO
}

const person02: pessoa ={
    name: "Bob",
    age: 21,
    corFavorita: colorsRainbow.ANIL
}

const person03: pessoa ={
    name: "Frank",
    age: 42,
    corFavorita: colorsRainbow.VERMELHO
}

