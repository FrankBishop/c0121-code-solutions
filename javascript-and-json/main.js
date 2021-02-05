var books = [
  {
    isbn: 12345678910,
    title: 'The Search for More Money',
    author: 'Mel Brooks'
  },
  {
    isbn: 1123645670,
    title: 'Attack of the Killer Code',
    author: 'Roger Corman'
  },
  {
    isbn: 9876543210,
    title: "The Book of D'oh",
    author: 'Homer Simpson'
  }
];

console.log('This is my array of books:', books);
console.log('This is the typeof my books:', typeof books);

var stringBooks = JSON.stringify(books);

console.log('This is my JSON string', stringBooks);
console.log('This is the typeof my JSON string', typeof stringBooks);

var studentJSONString = '{"Number id": 456789321, "String Name": "This is my student ID number string"}';
console.log('This is my studentJSONString', studentJSONString);
console.log('This is the typeof my studentJSONstring', typeof studentJSONString);

var parseJSON = JSON.parse(studentJSONString);
console.log('This is my parsed studentJSONString', parseJSON);
console.log('This is the typeof my parse', typeof parseJSON);
