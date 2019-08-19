export const getRandomNumber = (first = 1, last = 100) => Math.floor(Math.random() * last) + first;

export const colors = (color) => {
  switch (color) {
    case 'red':
      return '\x1b[31m';
    case 'green':
      return '\x1b[32m';
    case 'blue':
      return '\x1b[34m';
    default:
      return '\x1b[0m';
  }
};
