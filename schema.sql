DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
	item_id INTEGER NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price) VALUES
	("Chocolate-covered bananas", "Food", 9.99),
    ("Silk scarf", "Accessories", 50.00),
    ("iPod Nano", "Electronics", 189.99),
    ("Nintendo 64", "Electronics", 74.99),
    ("Peanut Butter M&M's", "Food", 8.98),
    ("Women's Medium Wash Jeans", "Clothing", 29.99),
    ("13 inch Laptop Case", "Electronics Accessories", 27.29),
    ("Beats by Dre Headphones", "Electronics Accessories", 149.99),
    ("Stainless Steel Water Bottle", "Fitness Accessories", 35.95),
    ("Pumpkin Scented Candle", "Home", 19.00);
    
    