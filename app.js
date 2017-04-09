var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');
var Book = require('./models/bookModel');
var bookRouter = require('./Routes/bookRoutes')(Book);

//mongo db
var db = mongoose.connect('mongodb://localhost/bookAPI');

//app initialisation
var app = express();
var port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Started Running Node Express Api!....');
});

app.listen(port, function () {
    console.log('Running api on port: ' + port);
});

//add book router to app
app.use('/api/books', bookRouter);

