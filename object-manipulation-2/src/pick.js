/* exported pick */
// function pick(source, keys) {
//   var array = Object.entries(source);
//   var newObject = {};
//   var i;
//   for(i=0; i <= array.length; i++) {
//   var key = array[i][0];
//   var value = array[i][1];
//   newObject[key] = value;
//   console.log(newObject);
//   }
//   return newObject
// }

// need if statement for if array[i] === keys[i], and a i+=2 loop for it
// add to new object or array
// then add values
function pick(source, keys) {
  var array = Object.entries(source);
  var newObject = {};
  var i;
  for (i = 0; i <= array.length; i++) {
    if (keys.includes(array[i])) {
      // console.log('something works')

    }

  }
  return newObject;
}

// maybe combo of filter method and and includes method
