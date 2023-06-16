const models = require("../models");

const getTiles = (req, res) => {
  models.tile.findAll().then(([tiles]) => res.json(tiles));
};

module.exports = { getTiles };
