let correctAnswer;

function resetInput() {
  //clear statee
}

function randomNumber() {
  return Math.floor(Math.random() * 11);
}

function makeQuestion() {
  var num1 = randomNumber();
  var num2 = randomNumber();
  correctAnswer = num1 + num2;
}

function checkAnswer() {
  let answer = event.target.value;
  if (answer === correctAnswer) {
    return 'correct';
  } else {
    return 'incorrect';
  }
}

//produce random 2 didgit math problem
// set  output on state
// capchure the answer

//event listerner on input
// compare the value of input with captured answer
// if there are uquqal, append correct to text
// else append incorrect

// populate new out put
