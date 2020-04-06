// EXERCÍCIO 1
// Leia o código abaixo:
    // const minhaFuncao = (quantidade) => {
    // 	const array = []
    // 	for(let i = 0; i < quantidade; i+=2) {
    // 			for(let j = 0; j < i; j++) {
    // 				array.push(j)
    // 			}
    // 	}
    // 	return array;
    // }
    // console.log(minhaFuncao(8))
    // RESPOSTAS
// a.R: []
// b.R: (6) [0, 1, 0, 1, 2, 3]
// c.R: (12) [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]

 
// EXERCÍCIO 2
// let arrayDeNomes = ["1", "2", "3", "4", "5"];
    
// const funcao = (lista, nome) => {
//   for (let i = 0; i < lista.length; i++) {
//     if (lista[i] === nome) {
//       return i;
//     }
//   }
// };

// console.log(funcao(arrayDeNomes, "1"));
// console.log(funcao(arrayDeNomes, "2"));
// console.log(funcao(arrayDeNomes, "6"));
    // RESPOSTAS
// a. R: 0 | 2 | underfined
// b. R: Sim, funcionaria pois estamos alterando um valor por outro e chamando-os com seus novos nomes.



// EXERCÍCIO 3

// O código abaixo mostra uma função que recebe um array e devolve outro array. Explique rapidamente o que ela faz e sugira um nome melhor para ela!
// R: Ele consulta o array e atribui o resultadoA mais 1 e posteriormente ele atribui ao resultadoB o valor de ResultadoB 
// multiplicado por x. Um nome mais interessante arraySomaEMultiplica

    // function metodo(array) {
    //   let resultadoA = 0;
    //   let resultadoB = 1;
    //   let arrayFinal = [];
    
    //   for (let x of array) {
    //     resultadoA += x; 
    //     resultadoB *= x;
    //   }
    
    //   arrayFinal.push(resultadoA);
    //   arrayFinal.push(resultadoB);
    //   return arrayFinal;
    // }


    // console.log(metodo[0,1])

// EXERCÍCIO 4
// Ao darmos uma idade humana a função retorna uma idadeCachorro
//a - R:
// let idade = function (idade) {
//     let idadeCachorro = idade * 7     
//     // formula de conversão da idade humana para a idade cachorro
//     return console.log(idadeCachorro)
//     //imprimindo o resultado da conversão
// }

// idade(88)
// //executando a função

// b - R:
// function pessoa(nome = "Raphael", idade=27, endereco="Guaruja, rua 2", estudante="sou"){
//    return console.log("Eu sou", nome, ", tenho" , idade , "anos, moro em", endereco, "e", estudante,"estudante.");
// // função com parametros em strings que retorna a concatenação das mesma.
// }

// pessoa()
// //executando a função
