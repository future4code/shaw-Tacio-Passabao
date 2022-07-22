Exercício 1.
a) VARCHAR - Garante que o dado seja inserido como um valor qualquer.  
    PRIMARY KEY - Garante que o dado inserido seja identificável na tabela. Deve ser um valor único e não-nulo
    DATE - Fetch date no formato padrão YYYY/MM/DD
    VARCHAR(X) - Garante que o tamanho máximo de uma variável seja X
    NOT NULL - Garante que o campo seja obrigatório

b) Show Databases - retorna as databases dentro das conexões do user no MySQL
    Show Tables - retorna as tables dentro da database atual

c) O comando mostra as colunas da tabela, o tipo (e o tamanho, se houver), se a variável pode ser vazia no input, o tipo de key e se ela tem um valor default ou não.


Exercício 2.
a) INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "002",
        "Glória Pires",
        1200000,
        "1963-08-25",
        "female"
    );

    b) Error Code: 1062. Duplicate entry '002' for key 'PRIMARY' - O erro acontece pois uma key do tipo PRIMARY (portanto, única) está sendo inserida 2x pra 2 valores diferentes.

    c) O erro acontece pois não estamos passando o gender nem birth date na linha INSERT. Basta adicionar um (, birth_date, gender) após salary

    d) Não estamos passando name, que é um campo NOT NULL. Basta apenas adicionar o (, name) e o nome dele dentro de VALUES.

    e) Não insere pois o MySQL entende a data como uma subtração, não como uma data. Basta apenas colocar a data entre aspas.

Exercício 3.
a) SELECT * from Actor WHERE gender = "female"
b) SELECT salary from Actor WHERE name = "Tony Ramos"
c) SELECT * from Actor WHERE gender = invalid => 0 rows returned, pois não há nenhum ator ou atriz com invalid no campo gender
d) SELECT id, name, salary from Actor WHERE salary < 500001
e) SELECT id, name from Actor WHERE id = "002" => trocar o nome por name, já que não existe um campo nome na table


Exercício 4.
a) A query retorna todos os dados de atores e atrizes que comecem com A ou comecem com J e que tenham um salário acima de 300000
b) SELECT * from Actor WHERE (name NOT LIKE "A%") AND salary > 350000
c) SELECT * from Actor WHERE (name LIKE "%G%" OR name LIKE "%g%")
d) SELECT * from Actor WHERE (name LIKE "%A%" or name LIKE "%g%" or name LIKE "%A%" or name LIKE "%a%") and salary BETWEEN 350000 AND 900000


Exercício 5. 
a)  CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR (255) UNIQUE NOT NULL,
    sinopse TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating INT NOT NULL
);

b) INSERT INTO Movie (id, title, sinopse, release_date, rating)
    VALUES(
        "001",
        "Se Eu Fosse Você",
        "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
        "2006-01-06",
        7
    );

c) INSERT INTO Movie (id, title, sinopse, release_date, rating)
    VALUES(
        "002",
        "Doce de mãe",
        "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
        "2012-12-27",
        10
    );

d) INSERT INTO Movie (id, title, sinopse, release_date, rating)
    VALUES(
        "003",
        "Dona Flor e Seus Dois Maridos",
        "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
        "2017-11-02",
        8
    );

e) INSERT INTO Movie (id, title, sinopse, release_date, rating)
    VALUES(
        "004",
        "Tropa de Elite",
        "Nascimento, capitão da Tropa de Elite do Rio de Janeiro, é designado para chefiar uma das equipes que tem como missão apaziguar o Morro do Turano. Ele precisa cumprir as ordens enquanto procura por um substituto para ficar em seu lugar. Em meio a um tiroteio, Nascimento e sua equipe resgatam Neto e Matias, dois aspirantes a oficiais da PM. Ansiosos para entrar em ação e impressionados com a eficiência de seus salvadores, os dois se candidatam ao curso de formação da Tropa de Elite.",
        "2007-10-05",
        10
    );


Exercício 6.
a) SELECT id, title, rating from Movie WHERE id = "X"
b) SELECT * from Movie WHERE title = "X"
c) SELECT id, title, sinopse from Movie WHERE rating >= 7


Exercício 7.
a) SELECT * from Movie WHERE (title LIKE %vida%)
b) SELECT * from Movie WHERE title LIKE %termo% or sinopse LIKE %termo%
c) SELECT * from Movie WHERE release_date < "2022-06-06"
d) SELECT * from Movie WHERE release_date < "2022-06-06" AND (title LIKE "%termo%" or sinopse LIKE "%termo%") AND rating > 7