const fs = require('fs');
const book = {
	title: 'Title',
	author: 'Miguel Angel'
};

const bookJSON = JSON.stringify(book);
console.log('Object converted into JSON:\n' + bookJSON);

const parsedBook = JSON.parse(bookJSON);
console.log('JSON converted into an Object, once again:');
console.log(parsedBook);

const writed = fs.writeFileSync('book.json', bookJSON);
const buffered = fs.readFileSync('book.json');

console.log('Buffered data from the .json file:');
console.log(buffered);

const bufferToString = buffered.toString();
const parsedBuffered = JSON.parse(bufferToString);

console.log('Buffered data to string:');
console.log(parsedBuffered.title);
