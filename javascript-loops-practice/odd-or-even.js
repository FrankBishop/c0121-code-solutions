/* exported oddOrEven */
function oddOrEven(numbers) {
  var i;
  var oddEven = [];
  var number;
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      number = 'even';
      oddEven.push(number);
    } else {
      number = 'odd';
      oddEven.push(number);
    }
  }
  return oddEven;
}
