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
  const { params: { shopperId } = {}, body } = req;

  if ((typeof body.lat !== 'number')) {
    return res.status(400).send({ message: 'missing lat' });
  }
  if ((typeof body.lng !== 'number')) {
    return res.status(400).send({ message: 'missing lgn' });
  }
  const id = +shopperId;
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(id)) {
    return res.status(404).send({ message: 'missing shopperId' });
  }

  return ShopperPositionService.newPosition(id, body)
    .then(() => res.send());
};
