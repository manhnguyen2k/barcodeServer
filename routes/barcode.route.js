'use strict';

const express = require('express');
const BarcodeController = require('../controllers/barcode.controller')
<<<<<<< HEAD
const BeckmanController = require('../controllers/beackman.controller')
=======
>>>>>>> 77539b9a704138856a84825018df5f97d8c72e0f
const router = express.Router();
const { isAuthenticated } = require('../middlewares/auth.middleware');
router.use(isAuthenticated)
router.post('/genator', BarcodeController.BarcodeGenator);
<<<<<<< HEAD
router.post('/beckman_genator', BeckmanController.Genator);
=======
>>>>>>> 77539b9a704138856a84825018df5f97d8c72e0f
router.get('/read', BarcodeController.ReadBarcode);
module.exports = router