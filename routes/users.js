var express = require('express');
var router = express.Router();
const UserController = require ('../controllers/UserController.js')

router.get('/', function(req, res, next) {
  router.get('/', UserController.index)
});

module.exports = router;
