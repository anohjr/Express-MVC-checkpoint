const AbstractManager = require("./AbstractManager");

class BoatManager extends AbstractManager {
  constructor() {
    super({ table: "boat" });
  }

  findAll() {
    return this.connection.query(`select * from ${this.table}`);
  }

  findByName(name) {
    return this.connection.query(
      `select boat.id, boat.name, boat.coord_x, boat.coord_y, tile_type, tile.has_treasure * from ${this.table} join tile on tile.cood_x = boat.coord_x and tile.coord_y = boat.coord_y where name = ?`,
      [name]
    );
  }

  updateOne(boat, id) {
    return this.connection.query(`update ${this.table} set ? WHERE id = ?`, [
      boat,
      id,
    ]);
  }
}

module.exports = BoatManager;
