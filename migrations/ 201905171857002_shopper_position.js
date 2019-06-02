const { shopperPosition } = require('../src/repositories/TableNames');

exports.up = knex => knex.schema.createTable(shopperPosition, (table) => {
  // To complete
  table.number('id').unsigned().primary();
  table.string('shopperId').notNull();
  table.number('lat').notNull();
  table.number('lng').notNull();
});

exports.down = knex => knex.schema.dropTable(shopperPosition);
