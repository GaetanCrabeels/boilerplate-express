require('dotenv').config();
const bodyParser = require('body-parser');
let express = require('express');
let app = express();


app.use(bodyParser.urlencoded({ extended: false }));        


app.use('/public', express.static(__dirname + '/public'));
app.get('/', (req, res) => {
res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', (req, res) => {
  let message = 'Hello json';
  if (process.env.MESSAGE_STYLE) {
    message = message.toUpperCase();
    console.log(message)

  }
  res.json({ message });
});
app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.json({ time: req.time });
});
app.get('/:word/echo', (req, res) => {
  res.json({ echo: req.params.word });
});
app.get('/name', (req, res) => {
  const { first: firstName, last: lastName } = req.query;
  res.json({ name: `${firstName} ${lastName}` });
});
app.post('/name', (req, res) => {
  const { first: firstName, last: lastName } = req.body;
  res.json({ name: `${firstName} ${lastName}` });
});
module.exports = app;
