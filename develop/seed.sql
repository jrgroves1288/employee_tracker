USE employee_db;

INSERT INTO department (flavor, price, quantity)
VALUES ("vanilla", 2.50, 100);

INSERT INTO position (title, salary, department_id) 
Values ("Full-stack Developer", 100, 0);

INSERT INTO position (title, salary, department_id) 
Values ("Front-end Developer", 100, 1);

INSERT INTO position (title, salary, department_id) 
Values ("Back-end  Developer", 100, 2);

INSERT INTO employee (first_name, last_name, role_id) 
VALUES ("Billy", "Batson", 0001);

INSERT INTO employee (first_name, last_name, role_id) 
VALUES ("Bruce", "Wayne", 0002);

INSERT INTO employee (first_name, last_name, role_id) 
VALUES ("Diana", "Prince", 0002);