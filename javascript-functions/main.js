function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

var minutesToSecondResult = convertMinutesToSeconds(50);

console.log('The result of convertMinutesToSeconds Test is', minutesToSecondResult);

function greet(name) {
  return 'Hey ' + name;
}

var greetTest = greet('Frank');

console.log('The result of the greet Test is', greetTest);

function getArea(width, height) {
  return width * height;
}

var getAreaTest = getArea(30, 90);

console.log('The result of getArea Test is', getAreaTest);

function getFirstName(person) {
  return person.firstName;
}

var fullName = {
  firstName: 'Frank',
  lastName: 'Bishop'
};

var getFirstNameTest = getFirstName(fullName);

console.log('The results of getFirstName Test are', getFirstNameTest);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  return array[lastIndex];
}

var arrayTest = ['Mega Man', 'Mario', 'Samus'];

var getLastElementTest = getLastElement(arrayTest);

console.log('The result of getLastElement Test is', getLastElementTest);
