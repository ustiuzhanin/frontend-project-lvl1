export const getRandomNumber = (first = 1, last = 100) => Math.floor(Math.random() * last) + first;

export const getSmallestNum = (a, b) => (a > b ? b : a);

export const getLargestNum = (a, b) => (a > b ? a : b);

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
