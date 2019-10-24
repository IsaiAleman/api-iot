const router = require('express').Router();
const registrosCtrl = require('../controllers/registros');

router.route('/')
  .get(registrosCtrl.get)
  .post(registrosCtrl.post);

module.exports = router;
