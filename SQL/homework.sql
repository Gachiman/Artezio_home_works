-- Task 1

CREATE DATABASE IF NOT EXISTS homework;
USE homework;

CREATE TABLE IF NOT EXISTS positions (
	id TINYINT UNSIGNED NOT NULL AUTO_INCREMENT primary key,
    position_name VARCHAR (50) NOT NULL
);

CREATE TABLE IF NOT EXISTS employees (
	id MEDIUMINT UNSIGNED NOT NULL AUTO_INCREMENT primary key,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    position_id TINYINT UNSIGNED NOT NULL,
    salary DOUBLE NOT NULL,
    FOREIGN KEY (position_id) REFERENCES positions (id)
);

INSERT INTO positions (id, position_name) VALUES (null, 'Genius'),
    (null, 'Thief'), (null, 'Square pants'), (null, 'Hokage');

INSERT INTO employees (id, first_name, last_name, position_id, salary) VALUES (null, 'Vladimir', 'Putin', 2, 999999999),
    (null, 'Elon', 'Musk', 1, 10000000), (null, 'Spanch', 'Bob', 3, 0.5), (null, 'Naruto', 'Uzumaki', 4, 1000),
    (null, 'Gabe', 'Newell', 1, 3000000);

SELECT employees.first_name, employees.last_name, positions.position_name, employees.salary
FROM employees
INNER JOIN positions ON employees.position_id=positions.id;

-- Task 2

SELECT employees.first_name, employees.last_name, positions.position_name, employees.salary
FROM employees
INNER JOIN positions ON employees.position_id=positions.id
WHERE salary < 30000;

SELECT employees.first_name, employees.last_name, positions.position_name, employees.salary
FROM employees
INNER JOIN positions ON employees.position_id=positions.id
WHERE salary < 30000 AND position_name = 'Square pants';

-- Task 3

CREATE TABLE IF NOT EXISTS relationship (
	underling_id INT UNSIGNED NOT NULL,
    supervisor_id INT UNSIGNED NOT NULL
);

INSERT INTO relationship (underling_id, supervisor_id) VALUES (1, 3),
	(3, 2), (3, 5), (2, 4), (5, 4);

SELECT employees.first_name, employees.last_name, positions.position_name, employees.salary
FROM employees
INNER JOIN positions ON employees.position_id=positions.id
WHERE employees.id IN (
	SELECT underling_id FROM relationship WHERE supervisor_id = 4);