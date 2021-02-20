/* exported isPalindromic */
function isPalindromic(string) {
  var forward = string;
  var reverse = '';
  var i;
  for(i=string.length-1; i >= 0; i--){
    reverse+=string[i];
  }
  forward = forward.split(" ");
  forward = forward.join('');
  reverse = reverse.split(" ");
  reverse = reverse.join('');
  if(forward === reverse){
    return true
  } else {
    return false
  }
}
