/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string) {
  var first = string[0];
  if (first === 'J') { return true; } else {
    return false;
  }
}

function isOldEnoughToDrink(person) {
  var age = person.age;
  if (age >= 21) { return true; } else {
    return false;
  }
}

function isOldEnoughToDrive(person) {
  var age = person.age;
  if (age >= 16) { return true; } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  var age = person.age;
  if (age < 0) { return true; } else {
    return false;
  }
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'This is a neutral pH level';
  } else if (pH < 7 && pH >= 0) {
    return 'This is an acide ph level';
  } else if (pH <= 14 && pH > 7) {
    return 'This is a base pH level';
  } else {
    return 'This is an invalid pH level';
  }
}

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return "We're the warner brothers!";
  } else if (name === 'dot') {
    return "I'm cute";
  } else {
    return 'Goodnight everybody!';
  }
}
