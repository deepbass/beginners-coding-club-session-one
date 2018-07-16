'use strict';
// Simple tests, need to find some better way of truly automating these, 
// maybe through an API which when given a problem ID provides a series of inputs and answers? 
// Could use same problem ID to generate markup for problem through react or similiar.

let correct = false;
let numberOfChecks = 5;

for(let i = 0; i < numberOfChecks; i++){
    let inputs = [Math.random(),Math.random()];
    let studentAnswer = calculateAnswer(inputs);
    correct = studentAnswer == inputs[0] * inputs[1];
    if(!correct) break;
}

if(correct){
    document.getElementById('answer').setAttribute("style","color:green;");
} else {
    document.getElementById('answer').setAttribute("style","color:red;");
}