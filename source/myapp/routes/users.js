var express = require('express');
var router = express.Router();

var Parse = require('parse/node');
Parse.initialize('hxl3f5B3KmdK8mn7Qip6Ccy1lwI9ZtQKUCX12Rpk','zmDrkVxI5IOZPw9Chc8Lx3hq2Enhfj74xLEtOTBH');

var Users = Parse.Object.extend("Users");
/* GET users listing. */
router.get('/signup', function(req, res, next) {

	var user = new Users();
	user.set("name", req.query.name);
	user.set("password", req.query.password);
	user.set("age", +req.query.age);
	user.set("isDelted", false);
	user.save(null, {
		success: function(savedUser) {
			console.log("New object created with objectid: " + savedUser.id);
		},
		error: function(user, error) {
			res.send('Failed to create new object, with error code: ' + error.message);
		}
	});
});

// router.get('/signout', function(req, res, next) {
// 	var query = new Parse.Query(Users);
// 	qurey.equalTo("name", "홍길동");
// 	query.equalTo("password", "12344321");
// 	qurey.equalTo("isDelted", false);
// 	query.find({
// 		success: function(result) {
// 			if(results.length === 0) {
// 				return res.send('해당 유저가 없습니다');
// 			}
// 			var targetUser = results[0];
// 			targetUser.set("isDeleted", true);
// 			targetUser.save(null, {
// 				success: function(savedUser) {
// 					res.send('탈퇴: ' + savedIser.id);
// 				},
// 				error: function(user, error) {
// 					res.send("Error: " + error.code + " " + error.message);
// 				}
// 			});
// 		});
// 	module.exports + router;
// 			/*targetUser.destroy({
// 				success: function(deletedUser) {
// 					res.send('탈퇴:' +deletedUser.id);
// 					}				
// 			});
// 		},
// 		error: function(error) {
// 			res.send("Error:" +error.code +" "+ error.message);
// 		}
// 	});
// });

// router.get('/find', function(req, res, next) {
// 	res.send('respoond with a resource');
// });

// router.get('/signout', function(req, res, next) {
// 	res.send('respond with a resource');
// }
// // GET /users
// // 회원정보 얻어오기
// var query = new Parse.Query(Parse.User);
// query.equalTo("username", req.query.username);
// query.find({
// 	success: function(user) {
// 		res.json('Success: 회원조회 완료', {user:user});
// 	},
// 	error: function(user, error) {
// 		res.json('Error: 회원조회 실패', {error:error});
// 	}
// });

//   res.send('users 회원 정보 얻어오기');
// });

// router.post('/', function(req, res, next) {
// // GET /users
// // 회원 가입하기

//   var user = new Parse.User();
//   user.set("username",req.body.username);
//   user.set("password",req.body.password);
//   user.set("email",req.body.email);

//   user.signUp(null, {
//   	success: function(user) {
//   		res.json('Success: 회원가입 완료', {user:user});
//   	},
//   	error: function(user, error) {
//   		res.json('Error: 회원가입 실패', {error:error});
//   	}
//   });
// });

// router.put('/:objectId', function(req, res, next) {
// // Put/users/:objectId
// // 회원 수정하기
// var user = new Parse.user();
// user.set("username", req.body.username);
// user.set("password", req.body.password);
// user.set("email", req.body.email);

//   res.send('users 회원 수정완료');
// });

// router.delete('/', function(req, res, next) {
// // delete/users/:objectId
// // 회원 삭제하기
// var User = new Parse.Query(Parse.user)
// var query = new Parse.Query(Parse.User);
// query.equalTo("username",req.body.username);
// query.find({
// 	success: function(user) {
// query.get(user.objectId, {
	
// 		}
// 	}
// })
// 		console.log()
// 	}
// 	success: function(user) {
// 		res.json('Success: 회원삭제 완료', {user:user});
// 	},
// 	error: function(myObject, error) {
// 		res.json('Success: 회원삭제 실패', {error:error});
// 	}
// });

// error: function(user, error) {
// 	res.json('Error: 회원조회 실패', {error:error});
// }
// });
// });


module.exports = router;