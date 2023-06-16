const express = require("express");
const { getBoatByName, updateBoat } = require("./controllers/boatController");
const { getAllTiles } = require("./controllers/tileController");
const checkTile = require("./services/tileExists");
const { startGame } = require("./controllers/gameController");

const router = express.Router();

router.get("/boats", getBoatByName);
router.put("/boats/:id", checkTile, updateBoat);
router.get("/tiles", getAllTiles);
router.post("/games", startGame);

module.exports = router;
