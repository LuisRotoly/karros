CREATE DATABASE IF NOT EXISTS karros;

CREATE TABLE users (
  id_user int AUTO_INCREMENT PRIMARY KEY,
  name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  password varchar(255),
  token varchar(255)
);