let frases = require('./frases.json');
frases = frases.frases;

// Searching By ID.
const findByID = function(id){
    let frase = frases.find(frase => frase.id === id);
    return frase;
}

// Searching By Phrase.
const findByPhrase = function(phrase){
    found = [];
    frases.map((i) => {
        if (i.frase.toLowerCase().includes(phrase.toLowerCase())){
            found.push(i);
        }
    });

    return found;
}

// Searching By Author Name.
const findByAuthor = function(author){
    found = [];
    frases.map((i) => {
        if (i.autor.toLowerCase().includes(author.toLowerCase())){
            found.push(i);
        }
    });

    return found;
}

// Searching By Book Name.
const findByBook = function(book){
    found = [];
    frases.map((i) => {
        if (i.livro.toLowerCase().includes(book.toLowerCase())){
            found.push(i);
        }
    });

    return found;
}
