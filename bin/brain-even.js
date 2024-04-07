#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greeting from './brain-games.js';

const isNumberEvenGame = () => {
  greeting();

  const nameRequest = () => {
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hi ${userName}!`);
    return userName;
  };

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const name = nameRequest();

  for (let i = 0; i <= 2; i += 1) {
    const randomNumber = Math.floor(Math.random() * (101 - 1) + 1);
    const numberIsEven = randomNumber % 2;

    console.log(`'Question:' ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');

    const currentAnswer = 'Current!';
    const wrongAnswer = `'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`;
    if (answer !== 'yes' && numberIsEven === 0) {
      console.log(wrongAnswer);
      break;
    } else if (answer !== 'no' && numberIsEven !== 0) {
      console.log(wrongAnswer);
      break;
    } else {
      console.log(currentAnswer);
    }

    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

isNumberEvenGame();
