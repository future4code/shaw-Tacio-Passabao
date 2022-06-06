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