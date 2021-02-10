const express = require("express");
const router = express.Router();
const CarsController = require("./controllers/cars-controller");

router.get("/api/cars", CarsController.allCars)

module.exports = router;