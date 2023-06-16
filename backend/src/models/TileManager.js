/* eslint-disable no-unused-vars */
const AbstractManager = require("./AbstractManager");

class TileManager extends AbstractManager {
  constructor() {
    super({ table: "tile" });
  }

  findAll() {
    return this.connection.query(`select * from ${this.table}`);
  }

  findByCoords({ coordX, coordY }) {
    return this.connection.query(
      "SELECT * FROM tile where coord_x = ? and coord_y = ?",
      [coordX, coordY]
    );
  }

  resetAllTreasure() {
    return this.connection.query(`update tile set has_treasure=0`);
  }

  findAllByType(type) {
    return this.connection.query("select ");
  }
}

module.exports = TileManager;
