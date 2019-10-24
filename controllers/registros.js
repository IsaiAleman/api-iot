/* eslint-disable consistent-return */
const Validator = require('validatorjs');
const db = require('../models');

const get = async (req, res, next) => {
  try {
    const registros = await db.Registro.findAll();

    return res.status(200).send(registros);
  } catch (e) {
    return next(e);
  }
};

const post = async (req, res, next) => {
  try {
    const validation = new Validator(req.body, {
      matricula: `required`,
      fechahora: 'required',
    });

    validation.fails(() => res.status(409).send({
      msg: 'Existen errores de validación.',
      errores: validation.errors.all(),
    }));

    validation.passes(async () => {
      const registro = await db.Registro.create(req.body);
      return res.status(201).send({ msg: 'Ok'});
    });
  } catch (e) {
    return next(e);
  }
};


module.exports = {
  get,
  post,
};
