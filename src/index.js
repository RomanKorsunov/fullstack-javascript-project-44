import readlineSync from 'readline-sync';
import makeWelcome from './cli.js';

const roundsCount = 3;

const brainEngine = (rules, generateRound) => {
  const userName = makeWelcome();

  console.log(rules);

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
