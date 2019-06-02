const ShopperPositionService = module.exports;

const Cache = require('../cache/Cache');
const AsyncSave = require('../asyncSave/AsyncSave');

// To complete
ShopperPositionService.newPosition = async (shopperId, body) => {
  console.log(`Start ShopperPositionService.newPosition with body: ${JSON.stringify(body)}`);
  console.log(Cache.get(shopperId));
  if (!Cache.get(shopperId)) {
    Cache.save(shopperId, body);

    return AsyncSave.send(shopperId, body);
  };

  return Cache.get(shopperId);
};
