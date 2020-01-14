module.exports = function(app) {
    var tweetRequestController = require('../controllers/tweetRequestController');



    //GET BY ID
    app.route('/tweetRequest/:tweetRequestId')
        .get(tweetRequestController.getTweetRequest)
        .delete(tweetRequestController.deleteTweetRequest);
    //GET
    app.route('/tweetRequest/:tweetRequestId')
        .get(tweetRequestController.getTweetRequest);
};