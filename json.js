//var obj = {
//    name: 'Manuel'
//};
//console.log(obj);

//var stringObj = JSON.stringify(obj); //converte da oggetto a stringa
//console.log(typeof stringObj);
//console.log(stringObj);

//var personString = '{"name": "Manuel","age": 25}';
//var person = JSON.parse(personString);  //converte da stringa ad oggetto
//console.log(typeof person);
//console.log(person);

const fs = require('fs');

var originalNote = {
    title: 'some title',
    body: 'some body'
}; 

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

note = JSON.parse(noteString);

console.log(typeof note);
console.log('Successfully added:', '\n', 'title: ', note.title, '\n', 'body: ', note.body);