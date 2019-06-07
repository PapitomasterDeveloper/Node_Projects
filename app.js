const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

// Customize the yargs version showed in console
yargs.version('12.0.2');

yargs.command({
	command: 'add',
	describe: 'Add a new note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		},
		body: {
			describe: 'Note body',
			demandOption: true,
			type: 'string'
		}
	},
	handler: function(argv) {
		console.log('Title: ' + argv.title + '\n' + argv.body);
	}
});

yargs.command({
	command: 'remove',
	describe: 'Remove a note',
	handler: function() {
		console.log('Removing the note!');
	}
});

yargs.command({
	command: 'list',
	describe: 'List your notes!',
	handler: function() {
		console.log('Listing out all notes!');
	}
});

yargs.command({
	command: 'read',
	describe: 'Read a note!',
	handler: function() {
		console.log('Reading a note!');
	}
});

// Parse all the command when compiling
yargs.parse();
