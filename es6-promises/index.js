const takeAChance = require('./take-a-chance');
const promise = takeAChance('Frank');

promise.then((value) => {
  console.log(value);
});
promise.catch((error) => {
  let errorMessage = new Error(error);
  errorMessage = errorMessage.toString();
  errorMessage = errorMessage.slice(14);
  console.log(errorMessage);
});
