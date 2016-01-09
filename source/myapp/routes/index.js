var express = require('express');
var router = express.Router();
var path = require("path");
var _ = require("lodash")

var Parse = require('parse/node');
Parse.initialize('hxl3f5B3KmdK8mn7Qip6Ccy1lwI9ZtQKUCX12Rpk','zmDrkVxI5IOZPw9Chc8Lx3hq2Enhfj74xLEtOTBH');

var User = Parse.Object.extend("Users");

/* GET home page. */
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: '회원가입' });
});

router.get('/users', function(req, res, next) {
  var query = new Parse.Query(User);
  query.limit(10);
  query.find({
  	success: function(results) {
  		var users = _.map(results, function(object) {
  			return object.toJSON();
  		});
  		console.log(users)
  		res.render('user', { title: '회원조회', users: users});
  	},
  	error: function(error) {
  		next(error);
  	}
  });
});

// router.get('/signup', function(req, res, next) {
//   res.sendFile(path.join(__dirname+'/../views/signup.html'));
// });

// module.exports = router;\

// var express = require('express');
// var router = express.Router();

// router.get('/signup', function(req, res, next) {
// 	res.render('signup', { title: '회원가입' });
// });

module.exports = router;

