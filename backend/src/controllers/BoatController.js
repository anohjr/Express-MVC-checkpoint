/* eslint-disable camelcase */
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

const updateCoordBoat = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { coord_x, coord_y } = req.body;
  models.boat
    .updateCoordById(coord_x, coord_y, id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error editing the user");
    });
};

module.exports = { getBoats, updateCoordBoat };
