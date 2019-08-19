import readlineSync from 'readline-sync';
import { colors } from './util';

const roundsCount = 3;
const gameResult = {
  isRightAnswer: false,
  wrongAnswer: '',
  rightAnswer: '',
};

const launchGame = (game, gameDescription, gameName = 'Games') => {
  console.log(
    `${colors('blue')}Welcome to the Brain ${gameName}!${colors('default')}`,
  );
  console.log(`${gameDescription}\n`);

  const name = readlineSync.question('May I have your name? ', {
    defaultInput: 'Anonymous',
  });
  console.log(`Hello, ${colors('blue')}${name}${colors('default')}!\n`);

  for (let i = 0; i < roundsCount; i += 1) {
    const result = game(gameResult);

    if (result.isRightAnswer === false) {
      return console.log(
        `${colors('red')}"${result.wrongAnswer}"${colors(
          'default',
        )} is wrong answer ;(. Correct answer was ${colors('green')}"${
          result.rightAnswer
        }"${colors('default')}.`,
      );
    }

    console.log(`${colors('green')}Correct! ${colors('default')}`);
  }
  return console.log(
    `${colors('blue')}Congratulations, ${name}!${colors('default')}`,
  );
};

export default launchGame;
