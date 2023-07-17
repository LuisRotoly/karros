CREATE DATABASE IF NOT EXISTS karros;

CREATE TABLE role (
  id_role int AUTO_INCREMENT PRIMARY KEY,
  code varchar(255) NOT NULL,
  description varchar(255) NOT NULL
);

INSERT INTO role VALUES (1, "ADMINISTRADOR", "Administrador");
INSERT INTO role VALUES (2,"USUARIO", "Usuário");

CREATE TABLE `user` (
  id_user int AUTO_INCREMENT PRIMARY KEY,
  name varchar(255) NOT NULL UNIQUE,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  created_at datetime,
  token varchar(255),
  role_id int NOT NULL,
  FOREIGN KEY (role_id) REFERENCES role(id_role)
);

INSERT INTO `user` VALUES (1,"admin", "admin@admin.com", "admin", null, null, 1);

CREATE TABLE car (
  id_car int AUTO_INCREMENT PRIMARY KEY,
  name varchar(255) NOT NULL,
  brand varchar(255) NOT NULL,
  model varchar(255) NOT NULL,
  amount int NOT NULL,
  kilometers int NOT NULL,
  `year` varchar(9) NOT NULL,
  base_64_image MEDIUMTEXT,
  created_at datetime NOT NULL,
  updated_at datetime,
  is_deleted boolean NOT NULL,
  deleted_at datetime
);