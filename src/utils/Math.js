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

// onInput :
//1) get input,
// 2)chech with correct anwer
// 3) return message
// 4) generate new question
