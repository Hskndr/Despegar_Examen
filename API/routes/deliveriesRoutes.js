module.exports = function (app) {
    var deliveriesController = require('../controllers/deliveriesController');

    //GET BY ID
    app.route('/deliveries/:deliveriesId')
        .get(deliveriesController.getDeliveries);

    //GET ALL
    app.route('/deliveries')
        .get(deliveriesController.getAllDeliveries);
}