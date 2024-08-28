var groupUser = [
  { id: 1, name: "Ali", lastName: "Alizade", Age: 18 },
  { id: 2, name: "Reza", lastName: "Yazdani", Age: 20 },
  { id: 3, name: "Hossein", lastName: "Hosseini", Age: 22 },
  { id: 4, name: "Kiyan", lastName: "Hosseini", Age: 22 },
  { id: 5, name: "Mohammad", lastName: "Hosseini", Age: 22 },
  { id: 6, name: "Javad", lastName: "Hosseini", Age: 18 },
  { id: 7, name: "Zahra", lastName: "Hosseini", Age: 12 },
  { id: 8, name: "Najme", lastName: "Hosseini", Age: 35 },
  { id: 9, name: "Pri", lastName: "Hosseini", Age: 30 },
  { id: 10, name: "Parmida", lastName: "Hosseini", Age: 14 },
];
var isAllowed =groupUser.every(function (user) {
    if(user.Age>18){
    return true
    }
})
if(isAllowed === true){
    alert("Allowed")
}else{
    alert("Not Allowed")
}