const fs = require('fs');
const path = require('path');
const historyFilePath = path.join(__dirname, '../data/searchHistory.json');

// Example: A simplified in-memory data store
let searchHistory = [];

const addHistoryEntry = (url, wordCount) => {
  searchHistory.push({ url, wordCount });
  saveHistoryToFile();
};

const getSearchHistory = () => {
  return searchHistory;
};

const saveHistoryToFile = () => {
  const data = JSON.stringify(searchHistory, null, 2);
  fs.writeFileSync(historyFilePath, data);
};

const loadHistoryFromFile = () => {
  if (fs.existsSync(historyFilePath)) {
    const data = fs.readFileSync(historyFilePath, 'utf8');
    searchHistory = JSON.parse(data);
  }
};

loadHistoryFromFile();

module.exports = { addHistoryEntry, getSearchHistory };
