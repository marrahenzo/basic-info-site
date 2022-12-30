const express = require('express');
const app = express();
const root = __dirname;

app.get('/', (req, res) => {
  res.sendFile('./index.html', { root });
});

app.get('/about', (req, res) => {
  res.sendFile('./about.html', { root });
});

app.get('/contact', (req, res) => {
  res.sendFile('./contact-me.html', { root });
});

app.get('*', (req, res) => {
  res.status(404).sendFile('./404.html', { root });
});

app.listen(3000);
