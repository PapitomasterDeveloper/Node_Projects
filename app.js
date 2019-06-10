const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

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
	handler(argv) {
		notes.addNote(argv.title, argv.body);
	}
});

yargs.command({
	command: 'remove',
	describe: 'Remove a note',
	builder: {
		title: {
			describe: 'Title of the note to be deleted',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		 notes.removeNote(argv.title);
	}
});

yargs.command({
	command: 'list',
	describe: 'List your notes!',
	handler() {
		console.log('Listing out all notes!');
	}
});

yargs.command({
	command: 'read',
	describe: 'Read a note!',
	handler() {
		console.log('Reading a note!');
	}
});

// Parse all the command when compiling
yargs.parse();
