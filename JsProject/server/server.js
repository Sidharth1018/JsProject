const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
const wordcountRoutes = require('./routes/wordcount');
const historyRoutes = require('./routes/history');
app.use('/api/wordcount', wordcountRoutes);
app.use('/api/history', historyRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
