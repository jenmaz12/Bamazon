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
        buyProduct();
    })
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
                else if (res.length === 0) {
                    console.log("ERROR: Invalid item ID. Please select a valid item ID.");
                    displayProducts();
                }
                else if (res[0].quantity < parseInt(answers.numberUnits)) {
                    console.log("Insufficient quantity!");
                } else {
                    updateProduct(res[0], answers);
                }
            });
        });
};

function updateProduct(res, answers) {
    console.log("Processing order . . .");
    connection.query(
        "UPDATE products SET ? WHERE ?",
        [
            { quantity: res.quantity - parseInt(answers.numberUnits) },
            { item_id: answers.itemID }
        ],
        function (err, res2) {
            if (err) throw err;
            console.log(res2.affectedRows + " products updated!\n");
            console.log("Your total is $" + res.price * parseInt(answers.numberUnits));
            console.log();
            if(res.quantity - parseInt(answers.numberUnits) === 0) {
                deleteProduct(res);
            } else {
                again();
            }
           
        })
    
};

function deleteProduct(res) {
    console.log("You purchased the last of the stock of that item. Removing from inventory...");
    connection.query(
        "DELETE FROM products WHERE ?",
        {
            item_id: res.item_id
        },
        function(err, res3) {
            console.log(res3.affectedRows + " products removed from inventory.\n");
            again();
        }
    )
};

function again() {
    inquirer
    .prompt({
        type: "confirm",
        name: "again",
        message: "Would you like to purchase something else?"
    })
    .then(function (answer) {
        if (answer.again) {
            displayProducts();
        } else {
            console.log("Thanks for shopping at Bamazon!");
            connection.end();
        }
    })
};

displayProducts();
