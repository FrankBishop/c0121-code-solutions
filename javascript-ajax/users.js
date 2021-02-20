function getUsers() {
  var users = document.querySelector('#user-list');
  var request = new XMLHttpRequest();
  request.open('GET', 'https://jsonplaceholder.typicode.com/users');
  request.responseType = 'json';
  request.addEventListener('load', function () {
    console.log('status', request.status);
    console.log('response', request.response);
    var i;
    for(i=0; i < this.response.length; i++) {
      var list = document.createElement('li');
      list.textContent = this.response[i].name;
      users.appendChild(list);

    }

  })
  request.send()
}

getUsers();
