const express = require('express');

const ShopperPositionController = require('./controllers/ShopperPositionController');
const HealthCheckController = require('./controllers/HealthCheckController');

const router = express.Router();

router.post('/position/:shopperId', ShopperPositionController.insert);
router.get('/health-check', HealthCheckController.get)

module.exports = router;
