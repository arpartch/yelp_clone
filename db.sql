-- for help \?
-- list database \l
-- create database CREATE DATABASE database_name

-- list all tables \d


CREATE TABLE restaurants (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check(price_range >= 1 and price_range <=5)
);

ALTER TABLE restaurants ADD COLUMN featured boolean;
ALTER TABLE restaurants DROP COLUMN featured;

INSERT INTO restaurants (name, location, price_range) values ('shake shack', 'las vegas', 3);

select * from restaurants; --shows us data from every column

select name, price_range from restaurants;
--shows you specific fields in table