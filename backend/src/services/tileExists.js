/* eslint-disable no-unused-expressions */
const models = require("../models");

const checkTile = (req, res, next) => {
  models.tile.findByCoords(req.body).then(([tiles]) => {
    tiles.length > 0 ? next() : res.sendStatus(422);
  });
};

module.exports = checkTile;
