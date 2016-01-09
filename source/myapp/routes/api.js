var express = require('express');
var router = express.Router();

var Parse = require('parse/node');
Parse.initialize('hxl3f5B3KmdK8mn7Qip6Ccy1lwI9ZtQKUCX12Rpk','zmDrkVxI5IOZPw9Chc8Lx3hq2Enhfj74xLEtOTBH');

var User = Parse.Object.extend("Users");

router.post('/users/signup', function(req, res, next) {
	var user = new User();
	user.set("name", req.body.name);
	user.set("password", req.body.password);

	user.save(null, {
		success: function(user) {
			res.json({user: user.toJSON()});
		},
		error: function(user, error) {
			res.json({error: error.message});
		}
	});
});

module.exports = router;