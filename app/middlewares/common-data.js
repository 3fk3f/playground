'use strict';

const config = require('config');
const path = require('path');

module.exports = (req, res, next) => {
  res.locals.staticBasePath = config.get('staticBasePath');
  res.locals.imagesPath = path.join(res.locals.staticBasePath, 'images/');
  res.locals.stylesPath = path.join(res.locals.staticBasePath, 'stylesheets/');

  next();
};
