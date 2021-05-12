const takeAChance = require('./take-a-chance');

const chanceResult = takeAChance('Frank');

chanceResult.then(value => {
  console.log(value);
});
chanceResult.catch(error => {
  const errorMessage = error.message;
  console.log(errorMessage);
});
