import readlineSync from 'readline-sync';
import { decorate } from './util';

const roundsCount = 3;
const gameResult = {
  isRightAnswer: false,
  wrongAnswer: '',
  rightAnswer: '',
};

const launchGame = (game, gameDescription, gameName = 'Games') => {
  console.log(`${decorate(`Welcome to the Brain ${gameName}!`, 'blue')}`);
  console.log(`${gameDescription}\n`);

  const name = readlineSync.question('May I have your name? ', {
    defaultInput: 'Anonymous',
  });
  console.log(`Hello, ${decorate(name, 'blue')}!\n`);

  for (let i = 0; i < roundsCount; i += 1) {
    const result = game(gameResult);

    if (result.isRightAnswer === false) {
      return console.log(
        `${decorate(
          `"${result.wrongAnswer}"`,
          'red',
        )} is wrong answer ;(. Correct answer was ${decorate(
          `"${result.rightAnswer}"`,
          'green',
        )}. 
Let's try again, ${decorate(name, 'blue')}!`,
      );
    }

    console.log(`${decorate('Correct! ', 'green')}`);
  }
  return console.log(`${decorate(`Congratulations, ${name}!`, 'blue')}`);
};

export default launchGame;
