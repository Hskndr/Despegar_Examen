
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

console.log('SimpleRTAppAPI server started on: ' + port);