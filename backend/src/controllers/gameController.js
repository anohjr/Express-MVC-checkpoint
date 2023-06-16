const models = require("../models");

const startGame = async (req, res) => {
  try {
    await models.boat.updateOne({ coord_x: 1, coord_y: 1 }, 1);
    await models.tile.resetAllTreasure();
    const [tiles] = await models.tile.findAllByType("island");
    const randomIndex = Math.floor(Math.random() * tiles.length);
    await models.tile.updateOneTile(tiles[randomIndex].id);
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).json("error server");
  }
};

module.exports = { startGame };
