import readlineSync from 'readline-sync';
import launchGame from '..';
import { getRandomNumber, colors } from '../util';

const desc = `Answer ${colors('green')}"yes"${colors(
  'default',
)} if given number is prime. Otherwise answer ${colors('red')}"no"${colors(
  'default',
)}.`;

const prime = (gameRslt) => {
  const result = gameRslt;
  const number = getRandomNumber(1, 1);

  if (number > 1) {
    result.rightAnswer = 'yes';
  } else {
    result.rightAnswer = 'no';
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      result.rightAnswer = 'no';
      break;
    }
  }

  console.log(`Question: ${number}`);

  const answer = readlineSync.question('Your answer: ');

  if (result.rightAnswer === answer) {
    result.isRightAnswer = true;
    return result;
  }

  result.isRightAnswer = false;
  result.wrongAnswer = answer;
  return result;
};

export default () => launchGame(prime, desc, 'Prime');
