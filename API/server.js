
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//GET
//EXAMPLE
var tweetRequestRoutes = require('./routes/tweetRequestRoutes');
tweetRequestRoutes(app);

//DELIVERIES
var deliveriesRoutes = require ('./routes/deliveriesRoutes');
deliveriesRoutes(app);

//POST
var postedTweetRoutes = require('./routes/postedTweetRoutes');
postedTweetRoutes(app);


app.listen(port);

console.log('Server started on: ' + port);