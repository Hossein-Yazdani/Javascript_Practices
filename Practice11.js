// var exam = {
//   question1: ["2+2 = ? "],
//   question2: ["5+5 = ? "],
//   question3: ["10+10 = ? "],
//   question4: ["15+15 = ? "],
// };
// var userpoint = 0
// var answers = { answers1: [4], answers2: [10], answers3: [20], answers4: [30] };
// var userQuestion = +prompt(exam.question1 + "\n" + "2" + "\n" + "4");
// if(userQuestion === answers.answers1[0]){
//     alert("Correct")
//     userpoint++
// }else{
//     alert("Incorrecct")
// }
// var userQuestion = +prompt(exam.question2 + "\n" + "10" + "\n" + "15");
// if(userQuestion === answers.answers2[0]){
//     alert("Correct")
//     userpoint++
// }else{
//     alert("Incorrecct")
// }
// var userQuestion = +prompt(exam.question3 + "\n" + "20" + "\n" + "15");
// if(userQuestion === answers.answers3[0]){
//     alert("Correct")
//     userpoint++
// }else{
//     alert("Incorrecct")
// }
// var userQuestion = +prompt(exam.question4 + "\n" + "18" + "\n" + "30");
// if(userQuestion === answers.answers4[0]){
//     alert("Correct")
//     userpoint++
// }else{
//     alert("Incorrecct")
// }
// console.log(userpoint)
var exam = [
  { id: 1, question: "2+2 : ? ", answer: 4 },
  { id: 2, question: "9+2 : ? ", answer: 11 },
  { id: 3, question: "7+2 : ? ", answer: 9 },
  { id: 4, question: "5+2 : ? ", answer: 7 },
  { id: 5, question: "3+2 : ? ", answer: 5 },
];
var userPoint = 0
var userAnswer
exam.forEach(function(question){
    userAnswer = prompt(question.question + "\n" + "Enter your answer : ")
    if(userAnswer == question.answer){
        alert("You are god damn right!")
        userPoint++
    }else{
        alert("shit")
    }
})
console.log("Totall point earned : " + userPoint)
