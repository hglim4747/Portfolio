const express = require('express');
const app = express();
const ejs = require('ejs');
const moment = require('moment');
const morgan = require('morgan');

app.use((req, res, next) => {
  console.log(moment().format('YYYY-MM-DD hh:mm:ss'));
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(morgan('combined'));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(express.static('./script'));
app.get('*', (req, res) => {
  res.render('../script/index.html');
});

app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.listen(8080, () => console.log('Portfolio Open'));
