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

    for (let i = 0; i <= 2; i += 1) {

        const randomNumber1 = Math.floor(Math.random() * (101 - 1) + 1);
        const randomNumber2 = Math.floor(Math.random() * (101 - 1) + 1);

        const operators = ['+', '-', '*'];
        const randomOperator = operators[Math.floor(Math.random() * operators.length)];

        console.log(`'Question:' ${randomNumber1} ${randomOperator} ${randomNumber2}`);

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

        if (parseInt(answer) === correctAnswer) {
            console.log(correctAnswerMessage);
          } else {
            console.log(wrongAnswerMessage);
            break;
          }
          
          if (i === 2) {
            console.log(`Congratulations, ${name}!`);
          }
        }
};

calculatorGame();
