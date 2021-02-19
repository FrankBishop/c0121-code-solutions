// /* exported flatten */
// function flatten(array) {
//   var i=0;
//   var newArray = [];
//   for(i=0; i < array.length; i++){
//     if(!Array.isArray(array[i])){
//       var notArray = array[i];
//       console.log('notArray', notArray)
//       newArray.push(notArray);
//       console.log(newArray);
//     } else {
//       var isAnArray = array[i];
//       console.log('isArray', isAnArray);
//       var flatArray = [];
//       for(i=0; i <= isAnArray.length; i++) {
//         flatArray.push(isAnArray[i])
//         console.log('flat array', flatArray);
//       }
//       newArray.push(flatArray);
//       console.log('newArray', newArray)
//     }
//   }
//   return newArray
// }
