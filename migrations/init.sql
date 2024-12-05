-- MariaDB script

-- Drop the database if it exists
DROP DATABASE IF EXISTS somosproper;

-- Create the database
CREATE DATABASE somosproper;

-- Use the database
USE somosproper;

-- Table 'RecordsData'
DROP TABLE IF EXISTS RecordsData;

CREATE TABLE RecordsData (
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(160) NOT NULL,
    idPadre INT NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
);



INSERT INTO somosproper.RecordsData (id,nombre,idPadre) VALUES
	 (1,'Mascotas',0),
	 (2,'Gato',1),
	 (3,'Perro',1),
	 (4,'Plantas',0),
	 (5,'Árbol',4),
	 (6,'Flores',3),
	 (7,'Micu',2),
	 (8,'Sasy',2),
	 (9,'Fido',3),
	 (10,'Bobby',3),
     (11,'Roble',5);