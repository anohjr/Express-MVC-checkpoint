const AbstractManager = require("./AbstractManager");

class BoatManager extends AbstractManager {
  constructor() {
    super({ table: "boat" });
  }

  findAll() {
    return this.connection.query(`select * from ${this.table}`);
  }

  findByName(name) {
    return this.connection.query(`select * from ${this.table} where name = ?`, [
      name,
    ]);
  }
}

module.exports = BoatManager;
