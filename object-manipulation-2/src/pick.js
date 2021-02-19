/* exported pick */
function pick(source, keys) {
  var newObject = {};
  var keysArray = Object.keys(source);
  var i = 0;
  for (i = 0; i <= keys.length; i++) {
    if (keysArray.indexOf(keys[i]) >= 0 && source[keys[i]] !== undefined) {
      newObject[keys[i]] = source[keys[i]];
    }
  }
  return newObject;
}
