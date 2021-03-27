-- for help \?
-- list database \l
-- create database CREATE DATABASE database_name

-- list all tables \d

-- connect to (switch into) a database \c


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

select * from restaurants where id = 1; -- show data from a specific id
--works with other paramaters such as location = santa barbara or price_range = 3

select name, price_range from restaurants;
--shows you specific fields in table

UPDATE restaurants SET name = 'red hot', location = 'tacoma', price_range = 2 where id = 7;
--updates table entry

DELETE FROM restaurants where id = 7;
--delete table entry

CREATE TABLE reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL check(rating >=1 and rating <=5)
); 