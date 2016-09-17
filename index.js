const express = require('express');
const app = express();
const ejs = require('ejs');
const morgan = require('morgan');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(morgan('combined'));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(express.static('./script'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.listen(8080, () => console.log('Portfolio Open'));
