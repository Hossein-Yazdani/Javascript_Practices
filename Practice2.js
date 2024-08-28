var userInfo = [
  { id: 1, name: "Ali", lastname: "Alizade", Age: 18 },
  { id: 2, name: "Reza", lastname: "Yazdani", Age: 20 },
  { id: 3, name: "Hossein", lastname: "Hosseini", Age: 22 },
  { id: 4, name: "Kasra", lastname: "Gharipor", Age: 15 },
  { id: 5, name: "Mohammad", lastname: "Khorshidi", Age: 24 },
  { id: 6, name: "Mahdiyar", lastname: "Cheraghi", Age: 25 },
];
userInfo.forEach(function (user) {
  console.log(
    "id : " +
      user.id +
      "\n" +
      "name : " +
      user.name +
      "\n" +
      "lastname : " +
      user.lastname +
      "\n" +
      "Age : " +
      user.Age
  );
});
