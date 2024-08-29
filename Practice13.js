var userInfo = [
  { userName: "hossein", password: "123456" },
  { userName: "reza", password: "1234567" },
  { userName: "ali", password: "12345678" },
];
var userLogin = prompt("Enter Your UserName : ");
// var userPassword = prompt("Enter Your Password : "+"\n" +"If you don't remember your password press 1");
// var isLogin = userInfo.some(function (user) {
//   if (user.userName === userLogin && user.password === userPassword) {
//     return true;
//   }
// })
// if(isLogin === true){
//     alert("Welcome")
// }else if(userPassword == 1 ){
//     userLogin = prompt("Enter Your UserName Again : ");
//     isLogin = userInfo.find(function(user){
//         if(user.userName === userLogin){
//             alert("Your Password is : " + user.password)
//         }else{
//             alert("Wrong UserName")
//             return true
//         }
//     })
// }else{
//     alert("Wrong UserName or Password")
    
// }
var userPass = userInfo.find(function(user){
    return user.userName === userLogin
})
if(userPass===undefined){
    alert("Wrong UserName")
}else{
    alert("Your pass : " + userPass.password)
}