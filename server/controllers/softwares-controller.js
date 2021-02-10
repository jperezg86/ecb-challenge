const Software = require('../models/software')
exports.allSoftware = (req, resp) => {
    resp.contentType("application/json");
    Software.find().then(
        (response) => {
            resp.status = 200; 
            resp.send(response);
        }
    ).catch(error => {
        resp.status = 400;
        resp.send(error);
    })
};