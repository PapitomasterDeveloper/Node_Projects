const fs = require('fs');

fs.writeFileSync('note.txt', 'This file was created by NodeJS. \n')

fs.appendFileSync('note.txt','This is the appended text. \n');
