import launchGame from '..';
import { getRandomNumber, decorate } from '../utils';

const description = `What is ${decorate(
  'the result of the expression?',
  'green',
)}`;

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

const generateCalc = () => {
  const operandA = getRandomNumber();
  const operandB = getRandomNumber();
  const operation = operations[getRandomNumber(0, operations.length)];

  const question = `${operandA} ${operation.sign} ${operandB}`;
  const rightAnswer = operation.method(operandA, operandB).toString();

  return {
    question,
    rightAnswer,
  };
};

export default () => launchGame(generateCalc, description, 'Calc');
