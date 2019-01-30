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

connection.connect( function(err){
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
});