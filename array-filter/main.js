const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log('the even numbers are', evenNumbers);
const overFive = numbers.filter(number => number > 5);
console.log('the numbers over 5 are', overFive);
const startWithE = names.filter(name => name.charAt(0) === 'E');
console.log('The names that start with E are', startWithE);
const haveD = names.filter(name => name.includes('d') || name.includes('D'));
console.log('All the names with D are', haveD);
