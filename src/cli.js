import readlineSync from 'readline-sync';

const nameRequest = () => {
        const userName = readlineSync.question('May I have your name? ');
        console.log('Hi ' + userName + '!');
};

export { nameRequest };
