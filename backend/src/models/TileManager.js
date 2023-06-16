const AbstractManager = require("./AbstractManager");

class TileManager extends AbstractManager {
  constructor() {
    super({ table: "tile" });
  }

  findAll() {
    return this.connection.query(`select * from ${this.table}`);
  }
}

module.exports = TileManager;
