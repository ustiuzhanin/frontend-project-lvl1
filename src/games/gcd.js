import readlineSync from 'readline-sync';
import launchGame from '..';
import getRandomNumber from '../util';

const desc = 'Find the greatest common divisor of given numbers.';

const gcd = (gameRslt) => {
  let result = gameRslt;
  const num1 = getRandomNumber(1, 21);
  const num2 = getRandomNumber(1, 21);
  const getSmallestNum = (a, b) => (a > b ? b : a);
  const getLargestNum = (a, b) => (a > b ? a : b);

  console.log(`Question: ${num1} ${num2}`);

  const answer = readlineSync.question('Your answer: ');

  const smallestNum = getSmallestNum(num1, num2);
  const largestNum = getLargestNum(num1, num2);

  for (let i = smallestNum; i > 0; i -= 1) {
    if (smallestNum % i === 0 && largestNum % i === 0) {
      result.rightAnswer = i;
      break;
    }
  }

  if (result.rightAnswer === Number(answer)) {
    result.isRightAnswer = true;
    return result;
  }
  result = {
    ...result,
    isRightAnswer: false,
    wrongAnswer: answer,
  };
  return result;
};

export default () => launchGame(gcd, desc);
