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

-- Pushing data on tables --

INSERT INTO characters (id, image, name, age, weigth, history)
VALUES (DEFAULT, "mickeyAvatar.jpg", "Mickey", 30, 25.3, "is the main character of Disney. It's a mouse" );

INSERT INTO characters (id, image, name, age, weigth, history)
VALUES (DEFAULT, "donaldAvatar.jpg", "Donald", 28, 23, "is the best friend of Mickey. It's a duck" );

INSERT INTO genres (id, name, image)
VALUES (DEFAULT, "Aventura", "aventuraImage.jpg");

INSERT INTO genres (id, name, image)
VALUES (DEFAULT, "Fantasia", "fantasiaImage.jpg");

INSERT INTO movies (id, image, title, created_date, rating, genre_id)
VALUES (DEFAULT, "mickeyAndDonald.jpg", "Mickey & Donald", "1955-10-20", 4, 1);

INSERT INTO movies (id, image, title, created_date, rating, genre_id)
VALUES (DEFAULT, "plutoMovie.jpg", "Pluto", "1970-07-18", 5, 2);

INSERT INTO characters_has_movies (id, characters_id, movies_id)
VALUES (DEFAULT, 1, 1);

INSERT INTO characters_has_movies (id, characters_id, movies_id)
VALUES (DEFAULT, 2, 2);