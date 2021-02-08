/* exported pick */
// function pick(source, keys) {
//   var newObject = Object.create(source);
// newObject.array[0]= source.array[0];
// var i;
// for(key in keys){
//   newObject.array = array[0];
// }
// for(i=0; i <= keys.length; i++) {
//   newObject.keys = source.keys
// }
// var key;
//   for (key in newObject){
//     if(newObject !== keys) {
//       delete newObject.key
//     }
//   }
//   return newObject;
// }
function pick(source, keys) {
  var newObject = Object.entries(source);
  var i;
  for (i = 0; i < -newObject.length; i += 2) {
    if (newObject[i] !== keys[i]) {
      newObject.splice(i, 2);
    }

  }
  return newObject;

}
