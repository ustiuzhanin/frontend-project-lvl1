import readlineSync from 'readline-sync';
import { launchGame } from '..';
import { getRandomNumber } from '../util';

const calc = () => {
  let gameResult = {
    isRightAnswer: false,
    wrongAnswer: '',
    rightAnswer: ''
  };

  const operationsArr = [
    {
      sign: '+',
      method: (a, b) => a + b
    },
    {
      sign: '-',
      method: (a, b) => a - b
    },
    {
      sign: '*',
      method: (a, b) => a * b
    }
  ];

  const a = getRandomNumber();
  const b = getRandomNumber();
  const getRandomOperator = getRandomNumber(0, operationsArr.length);

  const operation = operationsArr[getRandomOperator];

  console.log(`Question: ${a} ${operation.sign} ${b}`);

  const answer = readlineSync.question(`Your answer: `);

  if (operation.method(a, b) == answer) {
    gameResult.isRightAnswer = true;
    return gameResult;
  }

  return (gameResult = {
    isRightAnswer: false,
    wrongAnswer: answer,
    rightAnswer: operation.method(a, b)
  });
};

export default () => launchGame(calc, 'cssd');
