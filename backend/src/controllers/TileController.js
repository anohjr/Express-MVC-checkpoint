const models = require("../models");

const getAllTiles = (req, res) => {
  models.tile.findAll().then(([tiles]) => res.status(200).json(tiles));
};

module.exports = { getAllTiles };
