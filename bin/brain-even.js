import readlineSync from 'readline-sync';

const isNumberEvenGame = () => {
	console.log('Answer "yes" if the number is even, otherwise answer "no".');

    const randomNumber = Math.floor(Math.random() * (101 - 1) + 1);   
	console.log(`'Question:' ${randomNumber}`);

	const answer = readlineSync.question('Your answer: ');

    const numberIsEven = randomNumber % 2;
	
	const current = 'Current!';
	const yesIsWrong = "'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, User!";
	const noIsWrong = "'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, User!"
	
	if (answer === 'yes' && numberIsEven === 0) {
		console.log(`${current}`);

	} if (answer === 'yes' && numberIsEven !== 0) {
		console.log(`${yesIsWrong}`);

	} if (answer === 'no' && numberIsEven !== 0) {
		console.log(`${current}`);

	} if (answer === 'no' && numberIsEven === 0) {
		console.log(`${noIsWrong}`);
	}
	
	
};

isNumberEvenGame();