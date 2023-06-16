/* eslint-disable no-restricted-syntax */
const models = require("../models");

const startGame = (req, res) => {
  models.boat
    .updateOne({ coord_x: 1 }, 1)
    .then(() => {
      models.tile
        .resetAllTreasure()
        .then(() => {
          models.tile.findAllByType("island").then(([tiles]) => {
            const randomIndex = Math.floor(Math.random() * tiles.length);
            models.tile.updateOneTile(tiles[randomIndex].id).then(() => {
              res.sendStatus(201).catch((err) => {
                console.error(err);
              });
            });
          });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

module.exports = { startGame };
