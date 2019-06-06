const fs = require('fs');

fs.writeFileSync('notes.txt', 'This file was created by NodeJS. \n')

fs.appendFileSync('notes.txt','This is the appended text. \n');
