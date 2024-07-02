const express = require('express')
const router =  express.Router()
const quotesController = require('../controllers/quote');

router.get('/', quotesController.getRandomQuote);
router.post('/', quotesController.addQuote);
router.put('/:id', quotesController.updateQuote);
router.delete('/:id', quotesController.deleteQuote);
router.get('/search', quotesController.searchByAuthor);

module.exports = router;
