var num1 = +prompt("Enter Number 1");
var num2 = +prompt("Enter Number 2");
var calculator = {
  add: [num1 + num2],
  sub: [num1 - num2],
  mul: [num1 * num2],
  div: [num1 / num2],
  power: [num1 ** num2],
};
var userChoice = prompt("what do you want to do : " + "\n" + "1-add" + "\n" + "2-sub" + "\n" + "3-mul" + "\n" + "4-div" + "\n" + "5-power");
if(userChoice == 1){
    console.log(num1+" + "+num2+" = "+calculator.add)
}else if(userChoice == 2){
    console.log(num1+" - "+num2+" = "+calculator.sub)
}