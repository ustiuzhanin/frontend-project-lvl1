import readlineSync from 'readline-sync';
import launchGame from '..';
import getRandomNumber from '../util';

const desc = 'Answer "yes" if number even otherwise answer "no".';

const even = (gameRslt) => {
  const number = getRandomNumber();
  let result = gameRslt;

  console.log(`Question: ${number}`);

  const answer = readlineSync.question('Your answer: ');

  if (
    (number % 2 === 0 && answer === 'yes')
    || (number % 2 !== 0 && answer === 'no')
  ) {
    result.isRightAnswer = true;
    return result;
  }

  if (number % 2 === 0 && answer === 'no') {
    result = {
      isRightAnswer: false,
      wrongAnswer: answer,
      rightAnswer: 'yes',
    };
    return result;
  }
  if (number % 2 !== 0 && answer === 'yes') {
    result = {
      isRightAnswer: false,
      wrongAnswer: answer,
      rightAnswer: 'no',
    };
    return result;
  }
  result = {
    isRightAnswer: false,
    wrongAnswer: answer,
    rightAnswer: 'no',
  };
  return result;
};

export default () => launchGame(even, desc);
