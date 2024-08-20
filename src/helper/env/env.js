const dotenv = require('dotenv');

dotenv.config({
  override: true,
  path: `src/helper/env/.env.${process.env.ENV}`
});

module.exports = {};