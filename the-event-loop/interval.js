let count = 3;

var countdown = setInterval(decrease, 1000)

function decrease() {
  if(count > 0) {
    console.log(count)
    count--
  } else {
  console.log("Blast off!")
  clearInterval(countdown)
  }
}
