const cTable = require('console.table');
const inquirer = require('inquirer');
const mysql = require('mysql');
const { Action } = require('rxjs/internal/scheduler/Action');

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
        "view position",
    new inquirer.Separator(),
        "Add Employee",
        "Add Department", 
        "Add Position",
        "remove Employee" 
    new inquirer.Separator(),
    "change employee position",
    "exit"
    ]
  })
.then(function(answer) {
let Action = Action.Action
switch (Action){
case ("view all employees");
veiwAllemp();
break;
case ("view departmemt for employee");
empDep();
break;
case ("view department");
viewDep();
break;
case ("view position");
viewPos();
break;
case ("Add Employee");
addEmp();
break;
case ("Add Role");
addPos();
break;
case ("Remove Emplyee");
remEmp();
break;
}
});



var veiwAllemp = console.log{},
var empDep = console.log{},
var viewDep = console.log{},
var viewPos = console.log{},
var addEmp = console.log{},
var addPos = console.log{},
var remEmp = console.log{},

function(table{

    cTable([veiwAllemp,empDep,viewDep,viewPos,addEmp,addPos,remEmp]);
)};



