let questionField = document.querySelector('.question');
let labelOneField = document.querySelector('.first-option');
let labelTwoField = document.querySelector('.second-option');
let labelThreeField = document.querySelector('.third-option');
let answerOne = document.querySelector('#option-one');
let answerTwo = document.querySelector('#option-two');
let answerThree = document.querySelector('#option-three');
let nextButton = document.querySelector('.next');
let submitButton = document.querySelector('.finish');
let scoreBoard = document.querySelector('.score');
let answerOneField = document.querySelector('.option-list-one');
let answerTwoField = document.querySelector('.option-list-two');
let answerThreeField = document.querySelector('.option-list-three');
let finalScoreField = document.querySelector('.final-score');
let quizSection = document.querySelector('.quiz-section');
let resultSection = document.querySelector('.result-section');
let gradeField = document.querySelector('.grade');
let retakeQuizBtn = document.querySelector('.retake');
let quitQuizBtn = document.querySelector('.quit');
let score = 0;

const questions = [
  {
    question: 'What year did America get their independence?',
    optionOne: '1864',
    optionTwo: '1667',
    optionThree: '1776',
    answer: '1776',
  },
  {
    question: 'Who writes and passes the law?',
    optionOne: 'Parliament',
    optionTwo: 'President',
    optionThree: 'Legislator',
    answer: 'Legislator',
  },
  {
    question: 'What tool would you use to reduce the digital image size?',
    optionOne: 'Brush',
    optionTwo: 'Crop',
    optionThree: 'Cut',
    answer: 'Crop',
  },
  {
    question:
      'Making a compressed digital archive might produce what type of file format?',
    optionOne: 'ZIP',
    optionTwo: 'JPEG',
    optionThree: 'MP3',
    answer: 'ZIP',
  },
  {
    question:
      'What technology is used to make telephone calls over the Internet possible?',
    optionOne: 'VoIP',
    optionTwo: 'Ethernet',
    optionThree: 'Bluetooth',
    answer: 'VoIP',
  },
];

questionField.textContent = questions[0].question;
labelOneField.textContent = questions[0].optionOne;
labelTwoField.textContent = questions[0].optionTwo;
labelThreeField.textContent = questions[0].optionThree;

let navigate = questions.length - questions.length;

function nextQuestion(e) {
  e.preventDefault();
  navigate++;
  questionField.textContent = questions[navigate].question;
  labelOneField.textContent = questions[navigate].optionOne;
  labelTwoField.textContent = questions[navigate].optionTwo;
  labelThreeField.textContent = questions[navigate].optionThree;

  if (navigate === questions.length - 1) {
    nextButton.style.display = 'none';
  }

  if (answerOne.checked === true) {
    answerOne.checked = false;
  }
  if (answerTwo.checked === true) {
    answerTwo.checked = false;
  }
  if (answerThree.checked === true) {
    answerThree.checked = false;
  }

  if (
    answerOne.checked === false ||
    answerOne.checked === false ||
    answerThree.checked === false
  ) {
    nextButton.style.display = 'none';
  }

  answerOne.disabled = false;
  answerTwo.disabled = false;
  answerThree.disabled = false;

  answerOneField.classList.remove('correct');
  answerOneField.classList.remove('wrong');
  answerTwoField.classList.remove('correct');
  answerTwoField.classList.remove('wrong');
  answerThreeField.classList.remove('correct');
  answerThreeField.classList.remove('wrong');
}

function detectAnswer() {
  if (
    answerOne.checked === true ||
    answerTwo.checked === true ||
    answerThree.checked === true
  ) {
    nextButton.style.display = 'flex';
  }

  if (navigate === 4) {
    nextButton.style.display = 'none';
    submitButton.style.display = 'flex';
  }

  if (answerOne.checked === true) {
    answerTwo.disabled = true;
    answerThree.disabled = true;
  }
  if (answerTwo.checked === true) {
    answerOne.disabled = true;
    answerThree.disabled = true;
  }
  if (answerThree.checked === true) {
    answerOne.disabled = true;
    answerTwo.disabled = true;
  }

  if (answerOne.checked === true) {
    if (labelOneField.textContent === questions[navigate].answer) {
      score++;
      scoreBoard.textContent = `Score: ${score}`;
      answerOneField.classList.add('correct');
    } else {
      answerOneField.classList.add('wrong');
    }
  } else if (answerTwo.checked === true) {
    if (labelTwoField.textContent === questions[navigate].answer) {
      score++;
      scoreBoard.textContent = `Score: ${score}`;
      answerTwoField.classList.add('correct');
    } else {
      answerTwoField.classList.add('wrong');
    }
  } else if (answerThree.checked === true) {
    if (labelThreeField.textContent === questions[navigate].answer) {
      score++;
      scoreBoard.textContent = `Score: ${score}`;
      answerThreeField.classList.add('correct');
    } else {
      answerThreeField.classList.add('wrong');
    }
  }
}

function submitQuiz(e) {
  e.preventDefault();
  quizSection.style.display = 'none';
  scoreBoard.style.display = 'none';
  resultSection.style.display = 'flex';
  finalScoreField.textContent = score;

  if (score === 1) {
    gradeField.textContent = `20%`;
    gradeField.classList.add('low');
  }
  if (score === 2) {
    gradeField.textContent = `40%`;
    gradeField.classList.add('low');
  }
  if (score === 3) {
    gradeField.textContent = `60%`;
    gradeField.classList.add('average');
  }
  if (score === 4) {
    gradeField.textContent = `80%`;
    gradeField.classList.add('high');
  }
  if (score === 5) {
    gradeField.textContent = `100%`;
    gradeField.classList.add('high');
  }
}

function retakeQuiz() {
  location.reload();
  quizSection.style.display = 'flex';
}

function quitQuiz() {
  location.replace('quit_quiz.html');
}

nextButton.addEventListener('click', nextQuestion);
answerOne.addEventListener('click', detectAnswer);
answerTwo.addEventListener('click', detectAnswer);
answerThree.addEventListener('click', detectAnswer);
submitButton.addEventListener('click', submitQuiz);
retakeQuizBtn.addEventListener('click', retakeQuiz);
quitQuizBtn.addEventListener('click', quitQuiz);
