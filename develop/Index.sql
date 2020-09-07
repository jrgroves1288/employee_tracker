DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department(
id INTEGER(11) AUTO_INCREMENT NOT NULL,
employeeName VARCHAR(30),
PRIMARY Key (id)
);

CREATE TABLE position(
id INTEGER(11) AUTO_INCREMENT NOT NULL,
title VARCHAR(30),
salary DECIMAL(10,2),
deapartment_id INT,
PRIMARY Key (id)
);

CREATE TABLE employee(
id INTEGER(11) AUTO_INCREMENT NOT NULL,
firstName VARCHAR(30),
lastName VARCHAR(30),
role_id INT,
manager_id INT,
PRIMARY Key (id)
);






