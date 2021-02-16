/* exported pick */
// function pick(source, keys) {
//   var newObject = {};
//   var keysArray = Object.keys(source);
//   var valuesArray = Object.values(source);
//   var newKeys = [];
//   var newValues = [];
//   var i = 0;
//   for(i=0; i < keysArray.length; i++){
//     if (keys.includes(keysArray[i])) {
//     // newKeys.unshift(keysArray[i]);
//     // console.log(newKeys);
//     // newValues.unshift(valuesArray[i]);
//     // console.log(newValues)
//     newObject[keysArray[i]] = valuesArray[i]
//     }
//   }
//   console.log(newObject);
//   return newObject
// }

function pick(source, keys) {
  var newObject = {};
  var keysArray = Object.keys(source);
  var valuesArray = Object.values(source);
  var newKeys = [];
  var newValues = [];
  var i = 0;

  // if (keys.includes(keysArray[i])) {
  //   newKeys.push(keysArray[i])
  //   console.log(newKeys);
  //   newValues.push(valuesArray[i])
  //   console.log(newValues);
  // }

  //for loop to delete keys and values
  // var i = 0;
  for (i = 0; i < keysArray.length; i++) {
    if (keys.includes(keysArray[i])) {
      newObject[keysArray[i]] = valuesArray[i]
      console.log('loop run', newObject);
      console.log('loop run', i);
    } else if (!valuesArray[i]){
      break
    }
    }
    return newObject
  }
//   return newObject
// }
    // }
    // console.log(newObject);
