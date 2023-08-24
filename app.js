const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const glossaryData = JSON.parse(fs.readFileSync('glossary.json', 'utf8'));


app.get('/', (req, res) => {
  res.render('index', { data: glossaryData });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});