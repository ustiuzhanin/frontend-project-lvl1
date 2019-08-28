export const getRandomNumber = (first = 1, last = 100) => Math.floor(Math.random() * last) + first;

export const isEven = (number) => number % 2 === 0;

export const isPrime = (number) => {
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

export const getGcd = (num1, num2) => {
  const smallestNum = Math.min(num1, num2);
  const largestNum = Math.max(num1, num2);

  for (let i = smallestNum; i > 0; i -= 1) {
    if (smallestNum % i === 0 && largestNum % i === 0) {
      return i;
    }
  }
  return null;
};

export const decorate = (str, color) => {
  switch (color) {
    case 'red':
      return `\x1b[31m${str}\x1b[0m`;
    case 'green':
      return `\x1b[32m${str}\x1b[0m`;
    case 'blue':
      return `\x1b[34m${str}\x1b[0m`;
    default:
      return `${str}\x1b[0m`;
  }
};
