var tripsController = require('./trips/tripsController');

module.exports = function (app, express) {
  
  app.route('/api/trips')
    .get('/api/trips', function (req, res) {
      tripsController.getAllTrips(function (err, data) {
        if (err) {
          res.status(400).send('Error');
        } else {
          res.status(200).send(data);
        }
      });
    })
    .post(function (req, res) {
      tripsController.createTrip(req, function (err, data) {
        if (err) {
          res.status(400).send('Unable to complete request');
        } else {
          res.status(201).send(data);
        }
      });
    });

  app.route('/api/trips/:_id')
    .get(function (req, res) {
      tripsController.getTrip(req, function (err, data) {
        if (err) {
          res.status(400).send('Record doesn\'t exist');
        } else {
          res.status(200).send(data);
        }
      });
    })
    .put(function (req, res) {
      tripsController.updateTrip(req, function (err, data) {
        if (err) {
          res.status(400).send('Record doesn\'t exist');
        } else {
          res.status(200).send(data);
        }
      });
    });
};
