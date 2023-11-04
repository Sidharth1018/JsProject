const fetch = require('node-fetch');

// Example: This is a simplified word count function
const getWordCount = async (req, res) => {
  try {
    const { url } = req.body;
    const response = await fetch(url);
    const text = await response.text();
    const wordCount = text.split(/\s+/).length;
    res.json({ wordCount });
  } catch (error) {
    res.status(500).json({ error: 'Word count could not be retrieved.' });
  }
};

module.exports = { getWordCount };
