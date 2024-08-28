var userToDoList = [
  { id: 1, Task: "Washing Dishes", State: "working" },
  { id: 2, Task: "Working js", State: "working" },
  { id: 3, Task: "Play Games", State: "working" },
];
var userChoice = +prompt(
  "Pick a number : " +
    "\n" +
    "1-Add task" +
    "\n" +
    "2-Delete task" +
    "\n" +
    "3-Update task state"
);
if (userChoice === 1) {
  var id = userToDoList.length;
  var userNewTask = {
    id: id + 1,
    Task: prompt("Enter New Task"),
    state: "working",
  };
  userToDoList.push(userNewTask);
  console.log(userToDoList);
} else if (userChoice === 2) {
  var userDeleteChoice = +prompt("Enter Number of the task you want to delete");
  userDeleteChoice -= 1;
  userToDoList.splice(userDeleteChoice, 1);
  console.log(userToDoList);
}else if(userChoice === 3) {
    var userUpdateChoice = +prompt("Enter Number of the task you want to update");
    userToDoList.forEach(function(user){
        if(user.id === userUpdateChoice){
            user.State = "done"
        }
    })
    console.log(userToDoList);
}else{
    alert("Invalid Choice")
}
