const AbstractManager = require("./AbstractManager");

class BoatManager extends AbstractManager {
  constructor() {
    super({ table: "boat" });
  }

  findByName(name) {
    return this.connection.query(
      `select boat.id, boat.name, boat.coord_x, boat.coord_y, tile.type, tile.has_treasure from  ${this.table} join tile ON boat.coord_x = tile.coord_x AND boat.coord_y = tile.coord_y WHERE name = ?`,
      [name]
    );
  }

  updateOne(boat, id) {
    return this.connection.query("update boat set ? WHERE id = ?", [boat, id]);
  }
}

module.exports = BoatManager;
