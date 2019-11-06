const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();



fs.existsSync(path.join(__dirname, 'logs')) || fs.mkdirSync(path.join(__dirname, 'logs'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

app.use((req, res) => {
  res.status(404).send({ msg: 'Recurso no encontrado.' });
});

app.use((error, req, res, next) => {
  const err = {
    route: req.path,
    date: new Date(),
    message: error.message,
    body: req.body,
    headers: req.headers,
    params: req.params,
    query: req.query,
    sesion: req.sesion || {},
    clientIp: req.connection.remoteAddress,
    stack: error.stack,
    sql: error.sql,
  };

  return res.status(500).send({ msg: 'Error en el servidor.' , err});
});


var server = require('http').Server(app);
var io = require('socket.io')(server);

app.listen(3000, (err) => {
  if (err) {
    return console.error(err);
  }

  return console.log(`Servidor iniciado`);
});