const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = (accumulator, number) => accumulator + number;
console.log('The sum of the numbers is', numbers.reduce(sum));
const product = (accumulator, number) => accumulator * number;
console.log('The product of all numbers is', numbers.reduce(product));
const balance = function (accumulator, transaction, initialValue) {
  accumulator += 0;
  if (transaction['type'] === 'deposit') {
    return accumulator += transaction['amount']
  } else if (transaction['type'] === 'withdrawal') {
    return accumulator -= transaction['amount']
  }
};
console.log('The sum of all balances is', account.reduce(balance, 0));
function combineTraits(accumulator, trait) {
  return Object.assign(trait, accumulator);
}
console.log("the combination of traits is", traits.reduce(combineTraits));
