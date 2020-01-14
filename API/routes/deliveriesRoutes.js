module.exports = function (app) {
    var deliveriesController= require('../controllers/deliveriesController');

    //GET
    app.route('/deliveries/:deliveriesId')
        .get(deliveriesController.getDeliveries);
}