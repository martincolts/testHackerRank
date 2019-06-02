const ShopperPositionController = module.exports;

const ShopperPositionService = require('../services/ShopperPositionService');

// To complete
/**
 * @api {POST} /api/shoppers/position insert shoppers position
 * @apiName ShoppersPosition
 * @apiGroup Shoppers
 * @apiDescription insert shoppers position
 *
 * @apiParam (body) {number} lat the lat position
 * @apiParam (body) {number} lng the lng position
 * @apiParam (params) {number} shopper_id the id of the shopper
 *
 * @apiSuccessExample Success Response:
 * HTTP/1.1 200
 * { lat: 234234.6, 1: false, 2: false, 3: false, 4: true }
 *
 * @apiError (400) {null} Error if object param is invalid
 * @apiError (500) {Object} Error on internal runtime, should return nothing.
 */
ShopperPositionController.insert = (req, res) => {
  const { paramas: { shopperId } = {}, body } = req;

  return ShopperPositionService.newPosition(shopperId, body).then(() => {

    return res.send()
  });
};
