import readlineSync from 'readline-sync';
import { decorate } from './utils';

const roundsCount = 3;

const launchGame = (runGame, gameDescription) => {
  console.log(`${decorate('Welcome to the Brain Games!', 'blue')}`);
  console.log(`${gameDescription}\n`);

  const name = readlineSync.question('May I have your name? ', {
    defaultInput: 'Anonymous',
  });
  console.log(`Hello, ${decorate(name, 'blue')}!\n`);

  for (let i = 0; i < roundsCount; i += 1) {
    const { rightAnswer, question } = runGame();

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (rightAnswer !== answer) {
      const wrongAnswerMessage = `${decorate(
        `"${answer}"`,
        'red',
      )} is wrong answer ;(. Correct answer was ${decorate(
        `"${rightAnswer}"`,
        'green',
      )}.\n`;
      const tryAgainMessage = `Let's try again, ${decorate(name, 'blue')}!`;

      console.log(wrongAnswerMessage);
      console.log(tryAgainMessage);
      return;
    }

    console.log(`${decorate('Correct!', 'green')}`);
  }
  console.log(`${decorate(`Congratulations, ${name}!`, 'blue')}`);
};

export default launchGame;
