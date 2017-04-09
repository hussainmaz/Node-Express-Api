var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bookRouter = express.Router();

//api/books/get
bookRouter.route('/Books')
    .get(function (req, res) {
        var responseJson = { hello: "This is my api" };
        res.json(responseJson);
    });

app.use('/api', bookRouter);

// standard api function
app.get('/', function (req, res) {
    res.send('welcome to my API running under gulp!!!!');
});


//api port...
app.listen(port, function () {
    console.log("Gulp is running my app on PORT:" + port);
});