#!/usr/bin/env node

import readlineSync from 'readline-sync';

const calculatorGame = () => {
    const greeting = () => {
        console.log('Welcome to the Brain Games!');
      };

    greeting();

    const askForName = () => {
        const userName = readlineSync.question('May I have your name? ');
        console.log(`Hi ${userName}!`);
        return userName;
      };

    const name = askForName();

    console.log('What is the result of the expression?');

    let score = 0;
    let maxScore = 3;

    while (score < maxScore) {

        const randomNumber1 = Math.floor(Math.random() * (101 - 1) + 1);
        const randomNumber2 = Math.floor(Math.random() * (101 - 1) + 1);

        const operators = ['+', '-', '*'];
        const randomOperator = operators[Math.floor(Math.random() * operators.length)];

        const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`
        console.log(`'Question:' ${question}`);

        const askForAnswer = () => {
            return readlineSync.question('Your answer: ');
          };
      
          const answer = askForAnswer();

        let expressionResult = 0;

        switch (randomOperator) {
            case '+':
                expressionResult = randomNumber1 + randomNumber2;
                break;
            case '-':
                expressionResult = randomNumber1 - randomNumber2;
                break;
            case '*':
                expressionResult = randomNumber1 * randomNumber2;
                break;
            default:
                expressionResult = 0;
        }

        const correctAnswer = expressionResult;

        const correctAnswerMessage = 'Correct!';
        const wrongAnswerMessage = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`;

        if (answer == correctAnswer) {
            console.log(correctAnswerMessage);
            score += 1;
          } else {
            console.log(wrongAnswerMessage);
            break;
          }
          
          if (score === maxScore) {
            console.log(`Congratulations, ${name}!`);
          }
        }
};

calculatorGame();
