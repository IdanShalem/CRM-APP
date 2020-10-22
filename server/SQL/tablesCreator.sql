-- create database crm_app;

use crm_app;

-- CREATE TABLE owner(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(50) not null 
-- );

-- CREATE TABLE country(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(50) not null 
-- );

-- CREATE TABLE email_type(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     type VARCHAR(5) not null 
-- );

-- CREATE TABLE client(
--     id VARCHAR(50) NOT NULL PRIMARY KEY,
--     name VARCHAR(50) NOT NULL,
--     email VARCHAR(100) NOT NULL,
--     first_contact DATETIME NOT NULL,
--     email_type INT,
--     sold BOOLEAN NOT NULL,
--     owner INT,
--     country INT,

--     FOREIGN KEY (email_type) REFERENCES email_type(id),
--     FOREIGN KEY (owner) REFERENCES owner(id),
--     FOREIGN KEY (country) REFERENCES country(id)
-- );

SELECT DAY(first_contact) AS day , COUNT(id) AS sales
FROM client
where MONTH(first_contact)="10" AND DAY(first_contact) BETWEEN "1" AND  "30"
GROUP BY DAY(first_contact)
