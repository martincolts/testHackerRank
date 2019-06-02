const ShopperPositionService = module.exports;

const Cache = require('../cache/Cache');
const AsyncSave = require('../asyncSave/AsyncSave');

// To complete
ShopperPositionService.newPosition = async (shopperId, body) => {
  console.log(`Start ShopperPositionService.newPosition with body: ${JSON.stringify(body)}`);

  return Promise.resolve();
};
