let frases = require('./../utils/functions');

module.exports = {
    async index(req, res) {
        res.status(200).json(frases.getAll());
    }, 
    
    async random (req, res) 
    {
        res.status(200).json(frases.getRandom());
    },
    
    async show (req, res)
    {
        res.status(200).json(frases.findByID(parseInt(req.params.id)));
    },
    
    async search (req, res)
    {
        res.status(200).json(frases.findByPhrase(req.body.frase));
    },
    
    async author (req, res)
    {
        res.status(200).json(frases.findByAuthor(req.body.autor));
    },
    
    async book (req, res)
    {
        res.status(200).json(frases.findByBook(req.body.livro));
    }
}

