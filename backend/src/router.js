const express = require("express");

const router = express.Router();

const { getTiles } = require("./controllers/TileController");
const { getBoats, updateCoordBoat } = require("./controllers/BoatController");
const tileExists = require("./services/tileExists");

router.get("/tiles", getTiles);
router.get("/boats", getBoats);

router.put("/boats/:id", tileExists, updateCoordBoat);

module.exports = router;
