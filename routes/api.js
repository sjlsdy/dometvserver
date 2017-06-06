var express = require('express');
var router = express.Router();

var userDao = require('../dao/userDao');

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

router.get('/silder', function(req, res, next) {
	userDao.silder(req, res, next);
});

router.get('/addSilder', function(req, res, next) {
	userDao.addSilder(req, res, next);
})

router.get('/delSilder', function(req, res, next) {
	userDao.delSilder(req, res, next);
})

module.exports = router;