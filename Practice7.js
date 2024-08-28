var userInput = prompt("Please Enter a word : ");
userInputArray = userInput.split("");
userInputRevers = userInputArray.reverse();
userInputReversString = userInputRevers.join("");
if(userInputReversString === userInput){
    alert("Right word")
}else(
    alert("Wrong word")
)