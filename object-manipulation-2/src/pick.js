/* exported pick */
// function pick(source, keys) {
//   var array = Object.entries(source);
//   var newObject = {};
//   var i;
//   array.splice(1,1)
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
// function pick(source, keys) {
//   var array = Object.entries(source);
//   var newObject = {};
//   var i;
  // var filteredArray = array.filter()
  // for (i = 0; i <= array.length; i++) {
  //   if (keys.includes(array[i])) {
  //     // console.log('something works')

  //   }
  // array.splice(1,1)
  // Array.from(array)
  // console.log(array)
//   for(i=0; i < array.length; i++){
//     newObject.array[i][i+1]
//   }

//   console.log(newObject);

//   return newObject
// }

//js object assign
// maybe combo of filter method and and includes method

//make object into an array
//delete array values not listed in keys
//turn array back into object using Object.fromEntries;
function pick(source, keys) {
  var newObject = {}
  var keysArray = Object.keys(source);
  console.log(keys);
  var valuesArray = Object.values(source);
  console.log(valuesArray);
  var newKeys = []
  var i = 0;
  for(i=0; i < keysArray.length; i++){
    if (keys.includes(keysArray[i])) {
      // keysArray.splice(i,1);
      // valuesArray.splice(i,1)
      // newKeys.push(keysArray[i]);
      newObject.keysArray[i] = valuesArray[i];
    }
    console.log(keysArray);
    console.log(valuesArray)
  }
  // keysArray.forEach((key, i) => newObject[key] = valuesArray[i]);
  console.log(newObject);
  return newObject
}
