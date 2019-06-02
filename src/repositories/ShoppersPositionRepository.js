const db = require('../utils/DB');
const { shopperPosition } = require('./TableNames');

const ShoppersPositionRepository = module.exports;

// To complete
ShoppersPositionRepository.insert = (data) => {
  console.log('insert');

  return db(shopperPosition).insert(data);
};
