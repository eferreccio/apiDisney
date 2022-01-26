-- Create tables in disney database--

CREATE TABLE characters (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
image VARCHAR(25) NOT NULL,
name VARCHAR(30) NOT NULL,
age TINYINT NOT NULL,
weigth DECIMAL(3,1),
history VARCHAR(200)
);

CREATE TABLE genres (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
name VARCHAR(10) NOT NULL,
image VARCHAR(25)
);

CREATE TABLE movies (
id INT NOT NULL AUTO_INCREMENT,
image VARCHAR(25) NOT NULL,
title VARCHAR(45) NOT NULL,
created_date DATE,
rating TINYINT,
genre_id INT,
PRIMARY KEY (id),
FOREIGN KEY (genre_id) REFERENCES genres(id)
);

CREATE TABLE characters_has_movies (
id INT NOT NULL AUTO_INCREMENT,
characters_id INT,
movies_id INT,
PRIMARY KEY (id),
FOREIGN KEY (characters_id) REFERENCES characters(id),
FOREIGN KEY (movies_id) REFERENCES movies(id)
);

CREATE TABLE users (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
name VARCHAR(25) NOT NULL,
name VARCHAR(50) NOT NULL,
password VARCHAR(200) NOT NULL
);

-- Pushing data on tables --

INSERT INTO characters (id, image, name, age, weigth, history)
VALUES (DEFAULT, "mickeyAvatar.jpg", "Mickey", 30, 25.3, "is the main character of Disney. It's a mouse" );

INSERT INTO characters (id, image, name, age, weigth, history)
VALUES (DEFAULT, "donaldAvatar.jpg", "Donald", 28, 23, "is the best friend of Mickey. It's a duck" );

INSERT INTO characters (id, image, name, age, weigth, history)
VALUES (DEFAULT, "plutoAvatar.jpg", "Pluto", 8, 12, "is the Mickey's pet. It's a dog" );

INSERT INTO characters (id, image, name, age, weigth, history)
VALUES (DEFAULT, "simbaAvatar.jpg", "Simba", 25, 80, "is the king of the jungle. It's a lion" );

INSERT INTO genres (id, name, image)
VALUES (DEFAULT, "Aventura", "aventuraImage.jpg");

INSERT INTO genres (id, name, image)
VALUES (DEFAULT, "Fantasia", "fantasiaImage.jpg");

INSERT INTO movies (id, image, title, created_date, rating, genre_id)
VALUES (DEFAULT, "mickeyChristmas.jpg", "Mickey's Once Upon a Christmas", "1999-10-20", 4, 1);

INSERT INTO movies (id, image, title, created_date, rating, genre_id)
VALUES (DEFAULT, "fantasia.jpg", "Fantasía 2000", "1999-12-17", 5, 2);

INSERT INTO movies (id, image, title, created_date, rating, genre_id)
VALUES (DEFAULT, "threeMusketeers.jpg", "Mickey, Donald, Goofy: The Three Musketeers", "2004-08-17", 5, 2);

INSERT INTO movies (id, image, title, created_date, rating, genre_id)
VALUES (DEFAULT, "lionKing.jpg", "The Lion King", "1994-06-15", 5, 1);

INSERT INTO characters_has_movies (id, characters_id, movies_id)
VALUES (DEFAULT, 1, 1);

INSERT INTO characters_has_movies (id, characters_id, movies_id)
VALUES (DEFAULT, 1, 2);

INSERT INTO characters_has_movies (id, characters_id, movies_id)
VALUES (DEFAULT, 1, 3);

INSERT INTO characters_has_movies (id, characters_id, movies_id)
VALUES (DEFAULT, 2, 1);

INSERT INTO characters_has_movies (id, characters_id, movies_id)
VALUES (DEFAULT, 2, 3);

INSERT INTO characters_has_movies (id, characters_id, movies_id)
VALUES (DEFAULT, 3, 1);

INSERT INTO characters_has_movies (id, characters_id, movies_id)
VALUES (DEFAULT, 4, 4);