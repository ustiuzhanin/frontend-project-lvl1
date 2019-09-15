import readlineSync from 'readline-sync';
import { decorate } from './utils';

const roundsCount = 3;

const playGame = (runGame, gameDescription) => {
  console.log(`${decorate('Welcome to the Brain Games!', 'blue')}`);
  console.log(`${gameDescription}\n`);

  const name = readlineSync.question('May I have your name? ', {
    defaultInput: 'Anonymous',
  });
  console.log(`Hello, ${decorate(name, 'blue')}!\n`);

  const launchRound = (acc) => {
    if (acc === roundsCount) {
      console.log(`${decorate(`Congratulations, ${name}!`, 'blue')}`);
      return;
    }

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

    launchRound(acc + 1);
  };

  launchRound(0);
};

export default playGame;
