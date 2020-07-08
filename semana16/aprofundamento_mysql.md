* --- Exercício 1 *

*a. ALTER TABLE Actors DROP COLUMN salary;*
R: Esse comando deletaria a coluna salary.

*b.ALTER TABLE Actors CHANGE gender sex VARCHAR(6);*
R: Esse comando alteraria o nome da coluna de gender para sex, assim como o MODIFY;

*c.* 
ALTER TABLE Actors CHANGE gender gender VARCHAR(255);
R: Esse comando alteraria apenas a quantidade de carcteries que um valor poderia ter na coluna gender;

*d. Agora,  altere a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres*
R: ALTER TABLE Actor MODIFY gender VARCHAR(100);

* --- Exercício 2*

*a. Escreva uma query que atualize o nome e a data de nascimento do ator com o id `003`*
R: UPDATE Actor SET birth_date = "1949-08-28" WHERE id = "003"

*b. Escreva uma query que atualize o nome da atriz `Juliana Paes` para `JULIANA PÃES`. Então, escreva outra query para voltar ao nome anterior.*
R: UPDATE Actor SET name = "Juliana Paes`" WHERE id = "005"; e 
UPDATE Actor SET name = "Juliana Paes`" WHERE id = "005";


*c. Escreva uma query que atualize todas as informações do ator com o id `005`*

UPDATE Actor 
	SET name = 'Taina Muller',
		salary = 1000000, 
		birth_date = "1985-05-10", 
		gender = "female"
WHERE id = "005"; 


*d. Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.*

O sistema volta essa resposta:

Código de erro: 1175. Você está usando o modo de atualização segura e tentou atualizar uma tabela sem um WHERE que usa uma coluna KEY. Não é possível usar o acesso ao intervalo no índice 'PRIMARY' devido à conversão de tipo ou agrupamento no campo 'id' Para desativar o modo de segurança, alterne a opção em Preferências -> Editor SQL e reconecte-se.

Esse resultado se dá pois não existe um ponto descrito para que a alteração seja feita, quando não setamos where dizemos que queremos que todos os valores devem ter o mesmo valor do update, pelo visto o sistema do Mysql previne que façamos essa m* e nos adverte se realmente queremos faze-lo, se sim devemos alterar as preferencias do programa.

* --- Exercício 3*

*a. Escreva uma query que apague a atriz com o nome Fernanda Montenegro*
R: DELETE FROM Actor WHERE name = "Fernanda Montenegro"

*b. Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00*
R: DELETE FROM Actor WHERE gender = "male" AND salary > 1000000

* --- Exercício 4*

*a. Escreva uma query que pegue o maior salário de todos os atores e atrizes*
R. SELECT * FROM Actor ORDER BY salary DESC LIMIT 1;

*b. Escreva uma query que pegue o menor salário das atrizes*
R. SELECT * FROM Actor ORDER BY salary ASC LIMIT 1;

*c. Escreva uma query que pegue a quantidade de atrizes*
R. SELECT COUNT(*) FROM Actor WHERE gender = "female" // retornou 3

*d. Escreva uma query que pegue a soma de todos os salários*
R. SELECT SUM(salary) FROM Actor // retornou '40854256645952'

* --- Exercício 5*

*a. Releia a última query. Teste-a. Explique o resultado com as suas palavras*
R. Ela retorna todos os generos da tabela;

*b. Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética*
R. 
SELECT *
FROM Actor
ORDER BY id, name DESC;

*c. Faça uma query que retorne todos os atores ordenados pelo salário*
R. 
SELECT *
FROM Actor
ORDER BY salary;

*d. Faça uma query que retorne os atores com os três maiores salarios*
R. 
SELECT *
FROM Actor
ORDER BY salary DESC 
LIMIT 3;

*e. Faça uma query que retorne a média de salário por gêner
R.
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;