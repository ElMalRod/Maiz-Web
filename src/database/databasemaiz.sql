-- Crando la base de datos
USE maiz_webgt;

USE maiz_webgt;

CREATE TABLE Pais (
  id INT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL
);

CREATE TABLE Departamento (
  id INT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  pais_id INT NOT NULL,
  FOREIGN KEY (pais_id) REFERENCES Pais(id)
);

CREATE TABLE TipoMaiz (
  id INT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL
);

CREATE TABLE TipoSiembra (
  id INT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL
);

CREATE TABLE Maiz (
  id INT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  tipo_maiz_id INT NOT NULL,
  tipo_siembra_id INT NOT NULL,
  FOREIGN KEY (tipo_maiz_id) REFERENCES TipoMaiz(id),
  FOREIGN KEY (tipo_siembra_id) REFERENCES TipoSiembra(id)
);

CREATE TABLE Usuario (
  id INT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL
);

CREATE TABLE Informacion (
  id INT PRIMARY KEY,
  rendimiento INT NOT NULL,
  calidad VARCHAR(50) NOT NULL,
  cosecha VARCHAR(50) NOT NULL,
  maiz_id INT NOT NULL,
  FOREIGN KEY (maiz_id) REFERENCES Maiz(id)
);

CREATE TABLE Imagen (
  id INT PRIMARY KEY,
  url VARCHAR(255) NOT NULL,
  maiz_id INT NOT NULL,
  usuario_id INT NOT NULL,
  FOREIGN KEY (maiz_id) REFERENCES Maiz(id),
  FOREIGN KEY (usuario_id) REFERENCES Usuario(id)
);

CREATE TABLE Comentario (
  id INT PRIMARY KEY,
  texto VARCHAR(255) NOT NULL,
  maiz_id INT NOT NULL,
  usuario_id INT NOT NULL,
  FOREIGN KEY (maiz_id) REFERENCES Maiz(id),
  FOREIGN KEY (usuario_id) REFERENCES Usuario(id)
);
