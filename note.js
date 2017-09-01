console.log("Starting note.js");

const fs = require('fs');

module.exports.store = (value) => {
    console.log(value + ' stored!');
    return value;
};

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return []; //se non trova il file restituisce come risultato un array vuoto
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = { title, body };
    var duplicateNotes = notes.filter((e) => e.title === title);  
  //var duplicateNotes = notes.filter((e) => { return e.title === title });   //questa dicitura è la stessa di sopra, sopra è semplificato usando il linguaggio ES6

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    } else {
        console.log('Note title already exist: ', title); 
        //return undefined; se non si esplicita un "return" automaticamente la funzione restituirà "undefined"
    }
};

var getAll = () => {
    var notes = fetchNotes();
    notes.forEach((e) => {
        console.log('Title: ', e.title, '\n', 'Body: ', e.body, '\n');
    })
};

var getNote = (title) => {
    var notes = fetchNotes();
    var filteredNote = notes.filter((e) => e.title === title);  
    
    return filteredNote[0];
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((e) => e.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;   //restituisce vero o falso
};

module.exports = {
    //addNote: addNote,   //definisco un export name (addNote) a gli attribuisco una funzione (addNote), in questo caso hanno lo stesso nome
    addNote, // è la stessa cosa di "addNote: addNote" in ES6
    getAll,
    getNote,
    removeNote
};

