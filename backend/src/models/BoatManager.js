const AbstractManager = require("./AbstractManager");

class BoatManager extends AbstractManager {
  constructor() {
    super({ table: "boat" });
  }

  findByName(name) {
    return this.connection.query(
      `select b.coord_y, b.coord_x, t.type from  ${this.table} b where name = ? JOIN tile t ON t.coord_x = b.coord_x AND t.coord_y = b.coord_y`,
      [name]
    );
  }

  updateCoordById(coordX, coordY, id) {
    return this.connection.query(
      "UPDATE boat SET coord_x = ?, coord_y = ? WHERE id = ?",
      [coordX, coordY, id]
    );
  }
}

module.exports = BoatManager;
