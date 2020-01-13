const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Objeto Usuario agregar campos
let user = {
    name:'',
    lastName: '',
    address:'',
    phone:'',
};

// Response
let response = {
    error: false,
    code: 200,
    message: ''
};

//Root delivery
app.get('/', function(req, res) {
    response = {
        error: true,
        code: 200,
        message: 'Start'
    };
    res.send(response);
});
app.route('/user')

    //GET
    .get(function (req, res) {
        response = {
            error: false,
            code: 200,
            message: ''
        };
        if(user.name === '' || user.lastName === ''|| user.address === '' || user.phone === '') {
            response = {
                error: true,
                code: 404,//501,
                message: 'User has not been created'
            };
        } else {
            response = {
                error: false,
                code: 200,
                message: 'User response',
                response: user
            };
        }
        res.send(response);
    })

    //POST
    .post(function (req, res) {
        if(!req.body.name || !req.body.lastName || !req.body.address || !req.body.phone) {
            response = {
                error: true,
                code: 502,
                message: 'All fields are required'
            };
        } else {
            if(user.name === '' || user.lastName === ''|| user.address === '' || user.phone === '') {
                response = {
                    error: true,
                    code: 503,
                    message: 'User exists'
                };
            } else {
                user = {
                    name: req.body.name,
                    lastName: req.body.lastName,
                    address: req.body.address,
                    phone: req.body.phone
                };
                response = {
                    error: false,
                    code: 200,
                    message: 'user has been created',
                    response: user
                };
            }
        }

        res.send(response);
    })

    //PUT
    .put(function (req, res) {
        if(!req.body.name || !req.body.lastName || !req.body.address || !req.body.phone) {
            response = {
                error: true,
                code: 502,
                message: 'All fields are required'
            };
        } else {
            if(user.name === '' || user.lastName === ''|| user.address === '' || user.phone === '') {
                response = {
                    error: true,
                    code: 501,
                    message: 'User has not been created'
                };
            } else {
                user = {
                    name: req.body.name,
                    lastName: req.body.lastName,
                    address: req.body.address,
                    phone: req.body.phone
                };
                response = {
                    error: false,
                    code: 200,
                    message: 'user updated',
                    response: user
                };
            }
        }

        res.send(response);
    })

    //DELETE
    .delete(function (req, res) {
        if(user.name === '' || user.lastName === ''|| user.address === '' || user.phone === '') {
            response = {
                error: true,
                code: 501,
                message: 'user has not been created'
            };
        } else {
            response = {
                error: false,
                code: 200,
                message: 'user delete'
            };
            user = {
                name: '',
                lastName: '',
                address: '',
                phone: ''
            };
        }
        res.send(response);
    });
app.use(function(req, res, next) {
    response = {
        error: true,
        code: 404,
        message: 'URL not found'
    };
    res.status(404).send(response);
});
app.listen(port, () => {
    console.log('server start on port '+port);
});