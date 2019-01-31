require("dotenv").config();
const mysql = require("mysql");
const pw = require("./pw");
const inquirer = require("inquirer");
const sqlPW = pw.sql.password;
let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: sqlPW,
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
});

function displayProducts() {
    console.log("Selecting all products . . .");
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.table(res);
    })
    buyProduct();
};

function buyProduct() {
    inquirer
        .prompt([
            {
                name: "itemID",
                message: "What is the ID of the item you would like to buy?"
            }, {
                name: "numberUnits",
                message: "How many units would you like to buy?"
            }
        ])
        .then(function (answers) {
            connection.query("SELECT * FROM products WHERE ?", { item_id: answers.itemID }, function (err, res) {
                if (err) throw err;
                else if (res.quantity < answers.numberUnits) {
                    console.log("Insufficient quantity!");
                } else {
                    updateProduct();
                }
            });
        });
};

function updateProduct() {
    console.log("Processing order . . .");
    connection.query(
        "UPDATE products SET ? WHERE ?",
        [
            { quantity: res.quantity - answers.numberUnits },
            { item_id: answers.itemID }
        ],
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " products updated!\n");
        })
}

displayProducts();
