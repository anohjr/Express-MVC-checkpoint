const models = require("../models");

const getAllBoats = (req, res) => {
  models.boat.findAll().then(([boats]) => res.status(200).json(boats));
};

const getBoatByName = (req, res) => {
  models.boat
    .findByName(req.query.name)
    .then(([boats]) => res.status(200).json(boats));
};

const updateBoat = (req, res) => {
  models.boat
    .updateOne(req.body, req.params.id)
    .then(() => res.sendStatus(204));
};

module.exports = { getAllBoats, getBoatByName, updateBoat };
