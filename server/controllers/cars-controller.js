const Car = require('../models/car')
exports.allCars = (req, resp) => {
    resp.contentType("application/json");
    Car.find().then(
        (response) => {
            resp.status = 200; 
            resp.send(response);
        }
    ).catch(error => {
        resp.status = 400;
        resp.send(error);
    })
};