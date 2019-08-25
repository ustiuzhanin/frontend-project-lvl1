import launchGame from '..';
import { getRandomNumber, decorate } from '../util';

const description = `What is ${decorate(
  'the result of the expression?',
  'green',
)}`;

const calc = (result) => {
  const gameResult = result;
  const operations = [
    {
      sign: '+',
      method: (a, b) => a + b,
    },
    {
      sign: '-',
      method: (a, b) => a - b,
    },
    {
      sign: '*',
      method: (a, b) => a * b,
    },
  ];

  const operandA = getRandomNumber();
  const operandB = getRandomNumber();
  const randomOperator = getRandomNumber(0, operations.length);
  const operation = operations[randomOperator];

  gameResult.question = `${operandA} ${operation.sign} ${operandB}`;
  gameResult.rightAnswer = operation.method(operandA, operandB).toString();
  return gameResult;
};

export default () => launchGame(calc, description, 'Calc');
