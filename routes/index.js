var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectId;
var url = 'mongodb://localhost:27017/test';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect(url);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected to mongo');
});

var carsSchema = new Schema({
  number: Number,
  make: String,
  owner: String,
  phone: String,
  arriveDate: String,
  departureDate: String
});

var Cars = mongoose.model('Cars', carsSchema);
//get all cars from db
router.get('/api/cars', function(req, res, next) {
  console.log('I recieved GET request');
  Cars.find(function(err, cars){
    if(err)
      res.send(err);
    res.json(cars);
  });
});
// add new car to db
router.post('/api/cars', function (req, res, next) {
  var carsDb = new Cars({
    number: req.body.number,
    make: req.body.make,
    owner: req.body.owner,
    phone: req.body.phone,
    arriveDate: req.body.arriveDate,
    departureDate: req.body.departureDate
  });
  carsDb.save(function (err, carsDb) {
    if(err) {
      return handleError(err)
    }
    res.json(carsDb);
  });
});
//get car from cars db by id
router.get('/api/cars/:cars_id', function(req, res, next) {
  var id = req.params.cars_id;
  Cars.findById(id, function(err, cars) {
    if(err)
     res.send(err);

     res.json(cars);
  });
});
// delete car from cars db
router.delete('/api/cars/:cars_id', function (req, res) {
  var id = req.params.cars_id;
  Cars.remove({
    _id: id
  }, function(err, car) {
    if(err)
      res.send(err);

      res.json(car);
  });
});

router.get('/api/cars/:cars_id', function (req, res) {
  var id = req.params.cars_id;
  Cars.findOne({
    _id: id
  }, function(err, car) {
    if(err)
      res.send(err);

      res.json(car);
  });
});

// change data of car in cars db
router.put('/api/cars/:cars_id', function (req, res) {
  var id = req.params.cars_id;
  console.log(req.body.owner);
  Cars.findOneAndUpdate({_id : id}, { $set: {number : req.body.number, make : req.body.make, owner : req.body.owner, phone : req.body.phone, arriveDate : req.body.arriveDate, departureDate : req.body.departureDate}}, {new : true},
    function(err, car) {
        if(err)
          res.send(err);

          console.log(car);
          res.json(car);
      });
  });

module.exports = router;
