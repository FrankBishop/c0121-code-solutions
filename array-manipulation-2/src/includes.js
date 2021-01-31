/* exported includes */
// function includes(array, value) {
//   var i;
//   var theValue = array[i];
//   for (i = 0; i <= array.length; i++) {
//     if (theValue === value) {
//       return true;
//     } else {
//       find = false
//     }
//   }
//   return find
// }
// function includes(array, value) {
//   var i;
//   for (i = 0; i <= array.length; i++) {
//     if (array.find(value) === i) {
//       return true
//     } else {
//       return false
//     }
//   }
// }
// function includes(array, value) {
//   var found = if(array.find(value));
// var i;
// for (i = 0; i <= array.length; i++) {
//   if (array.find(value) === i) {
//     return true
//   } else {
//     return false
//   }
//   return found
// }
function includes(array, value) {
  var found = array.indexOf(value);
  var result = false;
  if (found >= 0) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
