

DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);


INSERT INTO burgers (name) VALUES ('Buffalo Chicken');
INSERT INTO burgers (name) VALUES ('Swiss Onion');
INSERT INTO burgers (name, eaten) VALUES ('Impossible', true);