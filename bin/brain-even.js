import readlineSync from 'readline-sync';

const isNumberEvenGame = () => {
	console.log('Answer "yes" if the number is even, otherwise answer "no".');

        const randomNumber = Math.floor(Math.random() * (101 - 1) + 1);   
	console.log(`'Question:' ${randomNumber}`);

	const answer = readlineSync.question('Your answer: ');
	console.log('Correct!');
};

isNumberEvenGame();
