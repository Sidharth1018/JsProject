const express = require('express');
const router = express.Router();
const wordcountController = require('../controllers/wordcountController');

router.post('/', wordcountController.getWordCount);

module.exports = router;