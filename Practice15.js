var userProfile = Boolean(+prompt("Uplode profile"))
var showUser
if(userProfile){
    showUser = setTimeout(function(num1){
        alert(num1)
    },5000,"nice pic")
}else{
    alert("no prof")
}