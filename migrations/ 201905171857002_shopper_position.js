const { shopperPosition } = require('../src/repositories/TableNames');

exports.up = knex => knex.schema.createTable(shopperPosition, (table) => {
  // To complete
});

exports.down = knex => knex.schema.dropTable(shopperPosition);
