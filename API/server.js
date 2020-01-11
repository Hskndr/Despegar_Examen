var express = require('express')
var http = require('http')
var app = express()

// Array Usuarios(Deliveries)
var users = ['oscar', 'juan', 'marcos']

//ROUTING
    //GET
app.get('/users', (req, res) => {
    res.send(users)
})


    //POST
app.post('/users', (req, res) => {
    users.push('User ' + users.length)
    res.send("New user add")
})

// Ruta raiz
app.get('/', (req, res) => {
    res.status(200).send("Welcome to API REST")
})

http.createServer(app).listen(8001, () => {
    console.log('Server started at http://localhost:8001');
});