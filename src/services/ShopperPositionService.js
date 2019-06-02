const ShopperPositionService = module.exports;

const Cache = require('../cache/Cache');
const AsyncSave = require('../asyncSave/AsyncSave');
//const ShopperPositionRepository = require('../repositories/ShoppersPositionRepository');

// To complete
ShopperPositionService.newPosition = async (shopperId, body) => {
  console.log(`Start ShopperPositionService.newPosition with body: ${JSON.stringify(body)}`);
  return AsyncSave.send(shopperId, body);
};
