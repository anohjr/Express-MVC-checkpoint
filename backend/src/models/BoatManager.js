const AbstractManager = require("./AbstractManager");

class BoatManager extends AbstractManager {
  constructor() {
    super({ table: "boat" });
  }

  findByName(name) {
    return this.connection.query(
      `select * from  ${this.table} where name = ?`,
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
