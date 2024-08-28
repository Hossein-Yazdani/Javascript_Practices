var userInfo = [
  { id: 1, name: "Ali", lastName: "Alizade", Age: 18 },
  { id: 2, name: "Reza", lastName: "Yazdani", Age: 20 },
  { id: 3, name: "Hossein", lastName: "Hosseini", Age: 22 },
];
var userName = prompt("Enter Your Name");
while (userName.length < 3 || userName.length > 10) {
  alert("Invalid Name");
  userName = prompt("Enter Your Name Again");
}
var userLastName = prompt("Enter Your Last Name");
while (userLastName.length < 3 || userLastName.length > 15) {
    alert("Invalid lastname");
    userLastName = prompt("Enter Your Name Again");
  }
var userAge = +prompt("Enter Your Age");
while (isNaN(userAge)) {
    alert("Invalid age");
    userAge = +prompt("Enter Your age Again");
  }
var userInformation = {id: 4, name: userName, lastName: userLastName, Age: userAge};
userInfo.push(userInformation);
console.log(userInfo);
