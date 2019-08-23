import readlineSync from 'readline-sync';
import launchGame from '..';
import { getRandomNumber, decorate } from '../util';

const description = `Answer ${decorate(
  '"yes"',
  'green',
)} if given number is prime. Otherwise answer ${decorate('"no"', 'red')}.`;

const prime = (gameRslt) => {
  const result = gameRslt;
  const number = getRandomNumber();

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

export default () => launchGame(prime, description, 'Prime');
