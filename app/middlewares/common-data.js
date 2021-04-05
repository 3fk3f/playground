'use strict';

const config = require('config');

module.exports = (req, res, next) => {
  res.locals.staticBasePath = config.get('staticBasePath');
  res.locals.imagesPath = res.locals.staticBasePath + 'images/';
  res.locals.stylesPath = res.locals.staticBasePath + 'stylesheets/';

  next();
};
