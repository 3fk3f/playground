const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(res.locals.staticBasePath);
  res.render('index', { title: 'Express', data: res.locals });
});

module.exports = router;
