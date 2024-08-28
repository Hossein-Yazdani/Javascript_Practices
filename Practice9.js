var employee = {
  ali: ["sass"],
  mohammad: ["css" , "js" , "php"],
  reza: ["html", "bootstrap", "sass"],
  sara: ["js" , "python"],
};
var maneger = prompt("Enter New task : ");
var who = prompt("Who : ");
var newTask = employee[who]
newTask.push(maneger)
console.log(employee)