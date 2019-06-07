const chalk = require('chalk');


console.log(chalk.green('Success!'));
console.log(chalk.red('Error'));
console.log(chalk.yellow('Syntax error \n'));

console.log(chalk.green.inverse('Success!'));
console.log(chalk.red.inverse('Error'));
console.log(chalk.yellow.inverse('Syntax error \n'));

console.log(chalk.green.bold('Success!'));
console.log(chalk.red.bold('Error'));
console.log(chalk.yellow.bold('Syntax error \n'));

console.log(chalk.green.inverse.bold('Success!'));
console.log(chalk.red.inverse.bold('Error'));
console.log(chalk.yellow.inverse.bold('Syntax error \n'));
