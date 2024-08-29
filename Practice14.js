var userMinutes = +prompt("Enter min : ");
var userSecond = +prompt("Enter seconde : ");
var timer = setInterval(function () {
  if (userSecond === 0 && userMinutes>0) {
    console.log("min : " + userMinutes + "\n" + "sec : " + userSecond)
    userMinutes--;
    userSecond = 59
  }else if(userMinutes ===0 && userSecond>0){
    console.log("min : " + userMinutes + "\n" + "sec : " + userSecond)
    userSecond--
}else if(userMinutes > 0 && userSecond > 0){
    console.log("min : " + userMinutes + "\n" + "sec : " + userSecond)
    userSecond--
}else if(userMinutes === 0 && userSecond === 0){
  console.log("min : " + userMinutes + "\n" + "sec : " + userSecond)
  clearInterval(timer)
  alert("game over")
} else {
    clearInterval(timer);
    alert("game over")
  }
}, 1000);
