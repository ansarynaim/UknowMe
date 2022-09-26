const readLineSync = require('readline-sync');
const chalk = require('chalk');
let score = 0;

//getting the value of name from the user using readlinesync inbuilt nodejs package

let userName = readLineSync.question(chalk.black.bgGreen.bold("Heyo! may i have your name please?\n"));

console.log(chalk.bgYellow.whiteBright("welcome to quizMania quizz competition " + userName));

console.log(chalk.yellowBright("\nThis quizz contains 5 questions ,every right answer will let me know how close you are to me.\n\n"))

//array of objects that contains question and anwers in key value pair
const easy = [
  {
    question: "Question 1 : What's the name of my hometown?\n" + "1. Gorakhpur \n" + "2. Nautanwa \n" + "3. Delhi \n" + "4. Noida \n",
    answer: 2
  },
  {
    question: "Question 2: Who is my favorite superhero?\n" + "1. Spiderman \n" + "2. Batman \n" + "3. Ironman \n" + "4.Thor \n",
    answer: 3
  },
  {
    question: "Question 3: What was the name of my Favrouite color? \n" + "1. Green  \n" + "2. Blue \n" + "3. Black \n" + "4. White \n",
    answer: 2
  },
  {
    question: "Question 4: From which university I graduated? \n" + "1. Agra University \n" + "2. Delhi University \n" + "3. Integral University \n" + "4. Teerthanker Mahaveer University \n",
    answer: 4
  },
  {
    question: "Question 5: What's my favorite fruit? \n" + "1. Banana \n" + "2. Apple \n" + "3. Mango \n" + "4. Papaya \n",
    answer: 2
  }
]


const play = (question, answer) => {
  let userAnswer = readLineSync.question(question);

  if (userAnswer == answer) {
    console.log(chalk.green("Right answer"));
    score = score + 1;
  } else {
    console.log(chalk.red("wrong answer"));
    console.log(chalk.green("correct answer is: " + answer));
    score = score - 1;
  }
  console.log("current score: " + score);
  console.log("------------------");
}



const chooseQuestion = () => {
  for (let i = 0; i < easy.length; i++) {
    play(easy[i].question, easy[i].answer)
  }
}



chooseQuestion();
console.log(chalk.bgYellow.white("Your Final score is: " + score))
