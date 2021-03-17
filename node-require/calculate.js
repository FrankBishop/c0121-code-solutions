const add = require('./add');
const sub = require('./subtract');
const divide = require('./divide');
const multiply = require('./multiply');

if (process.argv[3] === 'plus') {
  console.log(`Result: ${add.add(process.argv[2], process.argv[4])}`);
} else if (process.argv[3] === 'minus') {
  console.log(`Result: ${sub.subtract(process.argv[2], process.argv[4])}`);
} else if (process.argv[3] === 'over') {
  console.log(`Result: ${divide.divide(process.argv[2], process.argv[4])}`);
} else if (process.argv[3] === 'times') {
  console.log(`Result: ${multiply.multiply(process.argv[2], process.argv[4])}`);
}
