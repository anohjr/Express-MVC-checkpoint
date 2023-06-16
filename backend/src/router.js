const express = require("express");

const router = express.Router();

const { getTiles } = require("./controllers/TileController");
const { getBoats } = require("./controllers/BoatController");

router.get("/tiles", getTiles);
router.get("/boats", getBoats);

module.exports = router;
