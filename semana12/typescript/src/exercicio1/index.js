//Exercico A
var minhaString = "Variavel do tipo string "; // 12 (number) por exemplo dá erro;
//O que acontece? Ao atribuir um number a uma variavel do tipo string o VS code reclama que a variavel minhaString é do type String;
//Exercico B
var meuNumero = 26; //Essa variavel só aceita numeros. Podemos colocar (numer | string) como type e assim ela poderá receber tanto string como number;
//Exercico E
var colorsRainbow;
(function (colorsRainbow) {
    colorsRainbow["VERMELHO"] = "vermelho";
    colorsRainbow["LARANJA"] = "laranja";
    colorsRainbow["AMARELO"] = "amarelo";
    colorsRainbow["VERDE"] = "verde";
    colorsRainbow["AZUL"] = "azul";
    colorsRainbow["ANIL"] = "anil";
    colorsRainbow["VIOLETA"] = "violeta";
})(colorsRainbow || (colorsRainbow = {}));
var corFavorita = colorsRainbow;
//Exercico D
var person01 = {
    name: "Alice",
    age: 19,
    corFavorita: colorsRainbow.AMARELO
};
var person02 = {
    name: "Bob",
    age: 21,
    corFavorita: colorsRainbow.ANIL
};
var person03 = {
    name: "Frank",
    age: 42,
    corFavorita: colorsRainbow.VERMELHO
};
console.log(person01);
