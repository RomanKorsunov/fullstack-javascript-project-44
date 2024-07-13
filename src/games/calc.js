import brainEngine from '../index.js';
import getRandomInRange from '../randomInt.js';

const rules = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};

const calculate = (number1, number2, operator) => {
  let result = 0;
  if (operator === '+') {
    result = number1 + number2;
  } else if (operator === '-') {
    result = number1 - number2;
  } else {
    result = number1 * number2;
  }

  return result;
};

const generateRound = () => {
  const randomOperator = getRandomOperator();
  const randomNumber1 = getRandomInRange();
  const randomNumber2 = getRandomInRange();

  const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;

  const correctAnswer = calculate(
    randomNumber1,
    randomNumber2,
    randomOperator,
  );

  return [correctAnswer.toString(), question];
};

const calculatorGame = () => brainEngine(rules, generateRound);

export default calculatorGame;
