var num1 = 9;
var num2 = 8;
var num3 = 20;

var maximumValue = Math.max(num1, num2, num3);
console.log('The result of the Math.max test is', maximumValue);

var heroes = ['Green Arrow', 'Batman', 'Captain America', 'Black Canary'];
var randomNumber = Math.random();
randomNumber = heroes.length * randomNumber;
var randomIndex = Math.floor(randomNumber);
console.log('The random value of randomIndex is', randomIndex);
var randomHero = heroes[randomIndex];
console.log('One of my favorite superheroes is', randomHero);

var library = [
  {
    title: 'It',
    author: 'Stephen King'
  },
  {
    title: 'Dracula',
    author: 'Bram Stoker'
  },
  {
    title: 'Captain America: The Winter Soldier',
    author: 'Ed Brubaker'
  }
];

var lastBook = library.pop();
console.log('The last book in the library is', lastBook);
var firstBook = library.shift();
console.log('The first book is', firstBook);

var js = {
  title: 'Learning JavaScript',
  author: 'A Programmer'
};

var css = {
  title: 'CSS is Confusing',
  author: 'Master of CSS'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('My current library consists of', library);

var fullName = 'Frank Bishop';
var firstAndLastName = fullName.split(' ');
console.log('My first and last names are', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('syMyName is', sayMyName);
