/* exported sumAll */
function sumAll(numbers) {
  var i;
  var sum = 0;
  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
