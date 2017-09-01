console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./note.js');

const titleOptions = {
    describe: 'title of note',
    demand: true,
    alias: 't'
};
const bodyOptions = {
    describe: 'body of note',
    demand: true,
    alias: 'b'
}

//const argv = yargs.argv;
const argv = yargs
    .command('add', 'add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'list all notes')
    .command('read', 'read a note', {
        title: titleOptions
    })
    .command('remove', 'remove a note', {
        title: titleOptions
    })
    .help()
    .argv;

var command = argv._[0];
console.log('command: ', command);

//console.log('Process', process.argv);
//console.log('Yargs', yargs.argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);

    //if (note === undefined) {
    //    console.log("Il titolo specificato già esiste, la nota non è stata aggiunta, riprovare con un titolo differente");
    //} else {
    //    console.log('Added note: ', note.title, ' (', note.body, ')');
    //}

    if (note) { //"note" is an object
        console.log('Added note: ', note.title, ' (', note.body, ')');
    } else {  //note is undefined
        console.log("Il titolo specificato già esiste, la nota non è stata aggiunta, riprovare con un titolo differente");
    }
}
else if (command === 'list') {
    notes.getAll();
}
else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log('Here you are the note:', '\n', note.title, ' (', note.body, ')');
    } else {  //note is undefined
        console.log("Note not found");
    }
}
else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
}
else {
    console.log('Command not recognized');
}

//console.log(_.isString(true));
//console.log(_.isString("Manuel"));

//var lista = ["a", "b", "b", "c", "Manuel", "Manuel"];
//var uniqueLista = _.uniq(lista);

//console.log(lista);
//console.log(uniqueLista);

//var user = os.userInfo();
//fs.appendFileSync('../txt/greetings.txt', `Hello ${user.username}!\n`);
//notes.store("secret");
//notes.add(2, 2);
//console.log(res);