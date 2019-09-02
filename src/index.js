import readlineSync from 'readline-sync';
import { decorate } from './utils';

const roundsCount = 3;

const launchGame = (game, gameDescription) => {
  console.log(`${decorate('Welcome to the Brain Games!', 'blue')}`);
  console.log(`${gameDescription}\n`);

  const name = readlineSync.question('May I have your name? ', {
    defaultInput: 'Anonymous',
  });
  console.log(`Hello, ${decorate(name, 'blue')}!\n`);

  for (let i = 0; i < roundsCount; i += 1) {
    const result = game();

    console.log(`Question: ${result.question}`);
    const answer = readlineSync.question('Your answer: ');

    if (result.rightAnswer !== answer) {
      const wrongAnswerMessage = `${decorate(
        `"${answer}"`,
        'red',
      )} is wrong answer ;(. Correct answer was ${decorate(
        `"${result.rightAnswer}"`,
        'green',
      )}.\n`;
      const tryAgainMessage = `Let's try again, ${decorate(name, 'blue')}!`;

      return console.log(wrongAnswerMessage + tryAgainMessage);
    }

    console.log(`${decorate('Correct! ', 'green')}`);
  }
  return console.log(`${decorate(`Congratulations, ${name}!`, 'blue')}`);
};

export default launchGame;
