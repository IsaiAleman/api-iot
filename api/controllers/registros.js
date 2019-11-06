/* eslint-disable consistent-return */
const Validator = require('validatorjs');
const db = require('../models');

const io = require("socket.io-client");

const get = async (req, res, next) => {
  try {
    const registros = await db.Registro.findAll();

    return res.status(200).send(registros);
  } catch (e) {
    return next(e);
  }
};

const post = async (req, res, next) => {

  const ioClient = io.connect("http://localhost:8080");

  ioClient.on('connect', () => {
    const data = {
      type: 'request',
      body: req.body,
    };

    ioClient.emit('data', data);  
  });
  res.status(201).send({ msg: 'Ok'});
};


module.exports = {
  get,
  post,
};
