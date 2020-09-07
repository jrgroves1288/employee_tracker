const cTable = require('console.table');
const inquirer = require('inquirer');
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "employee_db"
});

connection.connect(function(err) {
    if (err) throw err;
    startUp();
  });



  function startUp(){
inquirer
 .prompt({
    name: "Action",
    type: "list",
    message: "What would you like to do?",
    choices: [
        "view Employees",
        "view departmemt for employee",
        "view department",
        "view posistion",
    new inquirer.Separator(),
        "Add Employee",
        "Add Department", 
        "Add Role", 
    new inquirer.Separator(),
    "change employee psoition",

    ]
  })







}
)


  }