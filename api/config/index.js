const fs = require('fs');

let environment = process.env.ENVIRONMENT || 'development';
if (!fs.existsSync(`./config/${environment}.json`)) {
  fs.copyFileSync(
    './config/env.example',
    `./config/${environment}.json`,
  );
}

try {
  environment = fs
    .readFileSync(`./config/${environment}.json`)
    .toString();
  environment = JSON.parse(environment);
} catch (e) {
  console.log('La configuración del servidor no pudo ser cargada.');
  process.exit();
}

module.exports = environment;
