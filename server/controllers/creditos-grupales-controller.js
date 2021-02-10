const CreditosGrupales = require('../models/creditosGrupales')
const Cambios = require('../models/cambios')
exports.allCreditos = (req, resp) => {
    resp.contentType("application/json");
    CreditosGrupales.find().then(
        (response) => {
            resp.status = 200; 
            resp.send(response);
        }
    ).catch(error => {
        resp.status = 400;
        resp.send(error);
    })
};


exports.getCambios = (req,resp) => {
    resp.contentType("application/json");
    Cambios.find().then(
        (response) => {
            resp.status = 200; 
            resp.send(response);
        }
    ).catch(error => {
        resp.status = 400;
        resp.send(error);
    })
}