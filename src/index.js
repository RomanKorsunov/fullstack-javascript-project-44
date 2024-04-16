#!/usr/bin/env node

import readlineSync from 'readline-sync';

const roundsCount = 3;

const brainEngine = (rules, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(`${rules}`);

  for (let score = 0; score < roundsCount; score += 1) {
    const [correctAnswer, question] = generateRound();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your asnwer: ');

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default brainEngine;
