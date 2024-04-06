#!/usr/bin/env node

import readlineSync from 'readline-sync';

const isNumberEvenGame = () => {
  const greeting = () => {
    console.log('Welcome to the Brain Games!');
  };

  greeting();

  const nameRequest = () => {
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hi ${userName}!`);
    return userName;
  };

  const name = nameRequest();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const current = 'Current!';
  const yesIsWrong = `'yes' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`;
  const noIsWrong = `'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`;

  for (let i = 0; i <= 2; i += 1) {
    const randomNumber = Math.floor(Math.random() * (101 - 1) + 1);
    const numberIsEven = randomNumber % 2;

    console.log(`'Question:' ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== 'yes' && answer !== 'no') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
      break;
    }

    if (answer === 'yes' && numberIsEven === 0) {
      console.log(`${current}`);
    } if (answer === 'yes' && numberIsEven !== 0) {
      console.log(`${yesIsWrong}`);
      break;
    } if (answer === 'no' && numberIsEven !== 0) {
      console.log(`${current}`);
    } if (answer === 'no' && numberIsEven === 0) {
      console.log(`${noIsWrong}`);
      break;
    }

    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

isNumberEvenGame();
