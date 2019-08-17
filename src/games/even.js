import readlineSync from 'readline-sync';
import { launchGame } from '..';
import { getRandomNumber } from '../util';

const even = () => {
  let gameResult = {
    isRightAnswer: false,
    wrongAnswer: '',
    rightAnswer: ''
  };

  const number = getRandomNumber();

  console.log(`Question: ${number}`);

  const answer = readlineSync.question(`Your answer: `);

  if (
    (number % 2 === 0 && answer === 'yes') ||
    (number % 2 !== 0 && answer === 'no')
  ) {
    gameResult.isRightAnswer = true;
    return gameResult;
  }

  if (number % 2 === 0 && answer === 'no') {
    return (gameResult = {
      isRightAnswer: false,
      wrongAnswer: answer,
      rightAnswer: 'yes'
    });
  }
  if (number % 2 !== 0 && answer === 'yes') {
    return (gameResult = {
      isRightAnswer: false,
      wrongAnswer: answer,
      rightAnswer: 'no'
    });
  }
  return (gameResult = {
    isRightAnswer: false,
    wrongAnswer: answer,
    rightAnswer: 'no'
  });
};

export default () => launchGame(even, 'cssd');
