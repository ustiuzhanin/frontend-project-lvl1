import readlineSync from 'readline-sync';
import launchGame from '..';
import { getRandomNumber, decorate } from '../util';

const description = `Answer ${decorate(
  '"yes"',
  'green',
)} if number even otherwise answer ${decorate('"no"', 'red')}.`;

const even = (gameRslt) => {
  const questionNumber = getRandomNumber();
  const result = gameRslt;

  console.log(`Question: ${questionNumber}`);

  const answer = readlineSync.question('Your answer: ');

  result.rightAnswer = questionNumber % 2 === 0 ? 'yes' : 'no';

  if (result.rightAnswer === answer) {
    result.isRightAnswer = true;
    return result;
  }
  result.isRightAnswer = false;
  result.wrongAnswer = answer;
  return result;
};

export default () => launchGame(even, description, 'Even');
