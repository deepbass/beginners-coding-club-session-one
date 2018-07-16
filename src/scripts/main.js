// Beginners coding club javascript exercise
// All of your work is done in the calculateAnswer function, 
// the rest is plumbing put in by me. We will cover what it
// does in later lessons. Your answer will appear green on the page
// if your function works correctly and red if not.
'use strict';

// Retrieving inputs and turning into numbers
var inputDomElements = document.getElementsByClassName('input');
var inputs = [];
for(var i = 0; i < inputDomElements.length; i++){
    inputs.push(parseInt(inputDomElements[i].innerHTML));
}


function calculateAnswer(arrayOfInputs){
    // All of your work should be done in this function.
    // Try calculate the answer from the inputs
    return 0;
}


var answer = calculateAnswer(inputs);
// This line of code puts your answer into the page. This process will be covered later.
document.getElementById('answer').innerHTML = answer;