const takeAChance = require('./take-a-chance');
const promise = takeAChance('Frank');

promise.then((value) => {
  console.log(value);
});
promise.catch((error) => {
  const errorMessage = error.message;
  console.log(errorMessage);
});
