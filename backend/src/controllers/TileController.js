const models = require("../models/index");

const getTiles = (req, res) => {
  models.tile
    .findAll()
    .then(([tiles]) => {
      res.status(200).json(tiles);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

module.exports = { getTiles };
