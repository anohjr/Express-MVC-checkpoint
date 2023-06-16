const express = require("express");

const boats = require("./controllers/BoatController");
const tiles = require("./controllers/TileController");

const router = express.Router();

router.get("/boats", boats.getBoats);
router.get("/tiles", tiles.getTiles);

module.exports = router;
