/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber = currentNumber + 1;
  }
  return numbers;
}

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count <= times) {
    repeated = repeated + ' ' + word;
    count += 1;
  }
  return repeated;
}

function logEachCharacter(string) {
  var i;
  for (i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

function doubleAll(numbers) {
  var i;
  var doubled = [];
  for (i = 0; i < numbers.length; i++) {
    var result = numbers[i] * 2;
    doubled.push(result);
  }
  return doubled;
}

function getKeys(object) {
  var keys = [];
  var key;
  for (key in object) {
    keys.push(key);
  }
  return keys;
}

function getValues(object) {
  var key;
  var values = [];
  for (key in object) {
    values.push(object[key]);
  }
  return values;
}
