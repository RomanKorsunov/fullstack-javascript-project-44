#!/usr/bin/env node

import readlineSync from 'readline-sync'; // подключаем библиотеку для получения необходимой информаии от пользователя: имени и ответов на вопросы

// объявляем функцию с логикой всей игры
const isNumberEvenGame = () => {
  // // объявляем функцию, которая приветствует пользователя
  const greeting = () => {
    console.log('Welcome to the Brain Games!');
  };

  greeting() // приветствуем пользователя

  // объявляем функцию, которая запрашивает имя пользователя, приветствует его и возвращает введеное имя наружу
  const askForName = () => {
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hi ${userName}!`);
    return userName;
  };

  const name = askForName(); // помещаем в переменную 'name' введеное имя пользователя для его дальнейшего использования

  console.log('Answer "yes" if the number is even, otherwise answer "no".'); // "выводим на экран" текст с правилами игры

  // запускаем цикл 'for', задачи которого:
  // 1. Задать посльзователю последовательно 3 вопроса
  // 2. Принять от пользователя ответ на каждый из вопросов
  // 3. Проинформировать пользователя о корректности/некорректности ответа 
  for (let i = 0; i <= 2; i += 1) {

    const randomNumber = Math.floor(Math.random() * (101 - 1) + 1); // помещаем в переменную 'randomNumber' случайное число в диапазоне от 1 до 100

    console.log(`'Question:' ${randomNumber}`); // "выводим на экран" вопрос о четности числа из переменной 'randomNumber'

    // объявляем функцию, которая запрашивает ответ пользователя на вопрос и возвращает ответ
    const askForAnswer = () => {
      return readlineSync.question('Your answer: ');
    };

    const answer = askForAnswer(); // помещаем ответ пользователя в переменную 'answer' для удобства

    const numberIsEven = randomNumber % 2 === 0; // переменная 'numberIsEven' проверяет, является ли случайно число, из переменной 'randomNumber', четным
    const correctAnswer = numberIsEven ? 'yes' : 'no'; // переменная 'correctAnswer' определяет, какой ответ является правильным для данного вопроса

    const correctAnswerMessage = 'Correct!'; // создаем, для удобства, переменную с сообщением о корректном ответе пользователя на вопрос
    const wrongAnswerMessage = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`; // создаем, для удобства, переменную с сообщением о некорректном ответе пользователя на вопрос
    
    // используем конструкцию if/else для проверки соответствия ответа пользователя правильному ответу из переменной 'correctAnswer' и вывода соответствующего сообщения "на экран" 
    if (answer === correctAnswer) {
      console.log(correctAnswerMessage);
    } else {
      console.log(wrongAnswerMessage);
      break; // добавляем 'break' для досрочного завершения игры при некорректном ответе
    }
    
    // добавляем условие, которое "выводит на экран" поздравление при корректных ответах пользователя на 3 вопроса подряд
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

isNumberEvenGame();
