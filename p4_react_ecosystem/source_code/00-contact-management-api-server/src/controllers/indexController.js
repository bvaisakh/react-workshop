const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.json('Server up and running!');
});

module.exports = router;
