var express = require('express');
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/bookAPI');
var Book = require('./models/bookModel');


var app = express();
var port = process.env.PORT || 3000;




var bookRouter = express.Router();
//api/books/get
bookRouter.route('/Books')
    .get(function (req, res) {

        var query = {};
        if (req.query.genre) {
            query.genre = req.query.genre;
        }
        console.log(query);

        Book.find(query, function (err, books) {
            if (err) {
                console.log(err);
            } else {
                res.json(books)
            }
        })
    });

// use book router..Monyou
app.use('/api', bookRouter);

// standard api function
app.get('/', function (req, res) {
    res.send('welcome to my API running under gulp!!!!');
});


//api port...
app.listen(port, function () {
    console.log("Gulp is running my app on PORT:" + port);
});