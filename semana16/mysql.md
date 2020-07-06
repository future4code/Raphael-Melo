**a. Nesta tabela, utilizamos o `FLOAT` para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.**
R: Nessa query também temos VARCHAT que seria como uma string e DATE que se refere a datas no formato YYYY-MM-DD; 
**b. O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.**
R: SHOW DATABASES ele me mostrou o nome e algumas infos do BD e SHOW TABLES ele me mostrou apenas a table Actor;
**c. O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando `SHOW Actor` e explique os resultados.**
R: Ele me voltou como resposta uma tabela com os field e type preenchidos com os nomes e tipos das colunas, uma linha como NULL , outra KEy que está sinalizando o id como primary kei e uma colunas default extra com nulls;

**Exercício 2**
Alert("Está pedidno para add atores, mas o gender não está mencionado nos parametros, vou add o gender para prosseguir os exercicios.)
**b. Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior 002. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.**
Error Code: 1062. Duplicate entry '002' for key 'PRIMARY', o erro se refere a entrada 002 duplicada na chave primaria. O erro se refere a repetição da chave primaria que nunca pode ser repetida.

**c**
R: Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1, o erro ocorreu pois os parametros (colunas) e os valores estão incompletos, nesse casso especifico faltam os parametros name e gender;  
Resposta da query corrigida: 1 linha (s) afetada (s)
**d**
R: Código de erro: 1364. O campo 'name' não tem um valor padrão, o erro ocorreu pois os parametros (colunas) e os valores estão incompletos, nesse casso especifico faltam o parametro name e o value name;  
Resposta da query corrigida: 1 linha (s) afetada (s)

**Exercício 3**
**a. Escreva uma query que retorne todas as informações das atrizes**
R: SELECT * from Actor WHERE gender = "female"

**b. Escreva uma query que retorne o salário do ator com o nome Tony Ramos**
R: SELECT * from Actor WHERE name = "Tony Ramos";

**c. Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.**
R: Error Code: 1054. Unknown column 'invalid' in 'where clause' , rolou esse erro, ela retorna que não há itens do gerero errado.

**d. Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000**
R: SELECT * from Actor WHERE salary <= 500000 ;
