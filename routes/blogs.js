const express = require('express');
const router = express.Router();

/* GET blogs. */
router.get('/', function(req, res, next) {
  res.send('Blogs Page');
});

module.exports = router;
