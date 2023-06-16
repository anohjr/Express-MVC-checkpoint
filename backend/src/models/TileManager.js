/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class TileManager extends AbstractManager {
  constructor() {
    super({ table: "tile" });
  }

  findByCoords({ coord_x, coord_y }) {
    return this.connection.query(
      "SELECT * FROM tile WHERE coord_x = ? AND coord_y = ?",
      [coord_x, coord_y]
    );
  }

  resetAllTreasure() {
    return this.connection.query("update tile set has_treasure=0");
  }

  findAllByType(type) {
    return this.connection.query("SELECT id FROM tile WHERE type = ?", [type]);
  }

  updateOneTile(id) {
    return this.connection.query(
      "update tile set has_treasure=1 WHERE id = ?",
      [id]
    );
  }
}

module.exports = TileManager;
