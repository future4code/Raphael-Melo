*a. ALTER TABLE Actors DROP COLUMN salary;*
R: Esse comando deletaria a coluna salary.

*b.ALTER TABLE Actors CHANGE gender sex VARCHAR(6);*
R: Esse comando alteraria o nome da coluna de gender para sex, assim como o MODIFY;

*c.* 
ALTER TABLE Actors CHANGE gender gender VARCHAR(255);
R: Esse comando alteraria apenas a quantidade de carcteries que um valor poderia ter na coluna gender;

*d. Agora,  altere a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres*
R: ALTER TABLE Actor MODIFY gender VARCHAR(100);

