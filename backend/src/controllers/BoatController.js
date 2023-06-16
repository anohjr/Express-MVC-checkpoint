const models = require("../models");

const getBoats = (req, res) => {
  const { name } = req.query;
  if (name) {
    models.boat
      .findByName(name)
      .then(([boat]) => {
        res.status(200).json(boat);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  } else {
    models.boat
      .findAll()
      .then(([boats]) => {
        res.status(200).json(boats);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }
};

module.exports = { getBoats };
