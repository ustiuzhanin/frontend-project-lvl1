import readlineSync from 'readline-sync';
import launchGame from '..';
import getRandomNumber from '../util';

const desc = 'Answer "yes" if number even otherwise answer "no".';

const even = (gameRslt) => {
  const number = getRandomNumber();
  const result = gameRslt;

  console.log(`Question: ${number}`);

  const answer = readlineSync.question('Your answer: ');

  result.rightAnswer = number % 2 === 0 ? 'yes' : 'no';

  if (result.rightAnswer === answer) {
    result.isRightAnswer = true;
    return result;
  }
  result.isRightAnswer = false;
  result.wrongAnswer = answer;
  return result;
};

export default () => launchGame(even, desc);
