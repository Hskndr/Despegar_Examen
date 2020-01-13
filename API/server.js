const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//ROUTING
app.use('/users',require('./users/users.controller'));


//START SERVER
const port = 8001;
const server = app.listen(port, function () {
    console.log('Server started at port'+port);
});