var student = {
  firstName: 'Frank',
  lastName: 'Bishop',
  age: 35
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('My full name is', fullName);
student.livesInIrvie = false;
student.previousOccupation = 'Customer Service Represenative';
console.log('Do I live in Irvine', student.livesInIrvie);
console.log('What was my previous job?', student.previousOccupation);
console.log('All my info', student);

var vehicle = {
  make: 'Dodge',
  model: 'Challenger',
  Year: 2012
};
vehicle['color'] = 'red';
vehicle['isConvertible'] = false;
console.log('The color of my vehicle is', vehicle['color']);
console.log('Is my car a convertible?', vehicle['isConvertible']);
console.log('Here is all the info about my vehicle', vehicle);

var pet = {
  name: 'Sonic',
  type: 'Hedgehog'
};

delete pet.name;
delete pet.type;
console.log('Delete test', pet);
