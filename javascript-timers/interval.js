function timer() {
  var header = document.querySelector('h1');
  var number = 4;
  var countdown = setInterval(stop, 1000);
  function stop() {
    if (number > 0) {
      header.textContent = number--;
    } else {
      clearInterval(countdown);
      header.textContent = '~Earth Beeeelooowww Us~';
    }
  }
}

timer();
