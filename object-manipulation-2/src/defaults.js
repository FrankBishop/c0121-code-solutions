/* exported defaults */
function defaults(target, source) {
  var key;
  for (key in source) {
    if (!target.hasOwnProperty(key)) {
      target[key] = source[key]
    }
  }
}
