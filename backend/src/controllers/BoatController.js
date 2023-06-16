const models = require("../models");

const getBoats = (req, res) => {
  if (req.query) {
    models.boat.findByName(req.query.name).then(([boat]) => {
      res.json(boat);
    });
  } else {
    models.boat.findAll().then(([boats]) => {
      console.warn(req.query);
      res.json(boats);
    });
  }
};

module.exports = { getBoats };
