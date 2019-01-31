DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
	item_id INTEGER NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    quantity INTEGER NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, quantity) VALUES
	("Chocolate-covered bananas", "Food", 9.99, 25),
    ("Silk scarf", "Accessories", 50.00, 5),
    ("iPod Nano", "Electronics", 189.99, 10),
    ("Nintendo 64", "Electronics", 74.99, 2),
    ("Peanut Butter M&M's", "Food", 8.98, 50),
    ("Women's Medium Wash Jeans", "Clothing", 29.99, 15),
    ("13 inch Laptop Case", "Electronics Accessories", 27.29, 8),
    ("Beats by Dre Headphones", "Electronics Accessories", 149.99, 20),
    ("Stainless Steel Water Bottle", "Fitness Accessories", 35.95, 17),
    ("Pumpkin Scented Candle", "Home", 19.00, 7);
