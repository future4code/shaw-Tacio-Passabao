Exercício 1.

a) Foreign Key é uma primary key de uma outra tabela, chamada para linkar uma tabela com a outra
b) INSERT INTO Rating (id, comment, rate, movie_id) VALUES ( "001", "Ótimo filme.", 8.6, "001" );
c) INSERT INTO Rating (id, comment, rate, movie_id) VALUES ( "002", "Filme Maravilhoso", 10, "010" ); - Não é possível criar um rating pra um filme que não existe na tabela Movie
d) ALTER TABLE Movie DROP COLUMN rating
e) DELETE FROM Movie WHERE id = "001" - É impossível deletar um filme que tenha uma ligação com uma tabela externa


Exercício 2

a) É uma tabela que relaciona um ator a um filme, baseado no ID deles
b)  INSERT INTO MovieCast(movie_id, actor_id) VALUES( "001", "001" );
    INSERT INTO MovieCast(movie_id, actor_id) VALUES( "001", "002" );
    INSERT INTO MovieCast(movie_id, actor_id) VALUES( "001", "004" );
    INSERT INTO MovieCast(movie_id, actor_id) VALUES( "001", "005" );
    INSERT INTO MovieCast(movie_id, actor_id) VALUES( "001", "007" );
    INSERT INTO MovieCast(movie_id, actor_id) VALUES( "001", "008" );
c) Não é possível relacionar um filme com um ator inexistente ou vice-versa
d) DELETE FROM Actor WHERE id = "008" - Não é possível apagar, pois existem outras tabelas atreladas com a que estamos tentando apagar

Exercício 3

a)  Seleciona tudo da tabela do filme em conjunto com a tabela Rating em que o movie.id seja igual o rating.movie_id.]
b)  SELECT title, Movie.id, rate FROM Movie INNER JOIN Rating ON Movie.id = Rating.movie_id;