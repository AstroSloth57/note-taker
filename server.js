const express = require('express');
const path = require('path');
const noteData = require('./db/db.json');
const PORT = 3001;
const app = express();
const fs = require('fs')

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../note-taker/public/notes.html'));
})

app.get('/api/notes', (req, res) => {
  res.json(noteData);
})

app.post('/api/notes', (req, res) => {
  
})

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);

