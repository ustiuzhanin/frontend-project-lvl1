import readlineSync from 'readline-sync';
import launchGame from '..';
import { getRandomNumber, decorate } from '../util';

const description = `What is ${decorate(
  'the result of the expression?',
  'green'
)}`;

const calc = gameRslt => {
  let result = gameRslt;
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

  const operandA = getRandomNumber();
  const operandB = getRandomNumber();
  const getRandomOperator = getRandomNumber(0, operationsArr.length);

  const operation = operationsArr[getRandomOperator];

  console.log(`Question: ${operandA} ${operation.sign} ${operandB}`);

  const answer = readlineSync.question('Your answer: ');

  if (operation.method(operandA, operandB) === Number(answer)) {
    result.isRightAnswer = true;
    return result;
  }
  result = {
    isRightAnswer: false,
    wrongAnswer: answer,
    rightAnswer: operation.method(operandA, operandB)
  };
  return result;
};

export default () => launchGame(calc, description, 'Calc');
