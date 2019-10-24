const router = require('express').Router();
const registrosRoutes = require('../routes/registros');

router.route('/')
  .get((req, res) => res.send({ msg: 'API registro estudiantes - Universidad del caribe' }));

router.use('/registros', registrosRoutes);

module.exports = router;
