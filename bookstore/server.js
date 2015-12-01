var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var users = require('./routes/users.js');
var customers = require('./routes/customers.js');
var books = require('./routes/books.js');
var categories = require('./routes/categories.js');
var authors = require('./routes/authors.js');
var prices = require('./routes/prices.js');
var login = require('./routes/login.js');


app.use(express.static('public'));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/api/', login);
app.use('/api/', users);
app.use('/api/', customers);
app.use('/api/', books);
app.use('/api/', categories);
app.use('/api/', authors);
app.use('/api/', prices)

app.listen(process.env.PORT ||3000);
