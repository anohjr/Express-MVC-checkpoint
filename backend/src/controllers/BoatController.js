const models = require("../models");

const getBoats = (req, res) => {
  models.boat.findAll().then(([boats]) => res.json(boats));
};

module.exports = { getBoats };
