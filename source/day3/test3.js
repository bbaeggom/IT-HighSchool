var users = [];

var signin = function(name, age, cb) {
	if(!name || !age) {
		console.log('가입실패! 이름,나이를 입력하세요.');
		return;
	}

	for(var i=0; i<users.length; i++) {
		if(users[i].name === name) {
			console.log('가입실패! 이미 가입한 회원입니다.');
			return;
		}
	}



	//if(!name) {
	//	console.log('가입실패! 이름이 존재하지 않습니다.');
	//	return;
	//}
	//if(!age) {
	//	console.log('가입실패! 나이가 존재하지 않습니다.');
	//	return;
	//}

	// 중복가입인지 name으로 검증하기

	//검증이 완료되면 객체를 만들어서 users 배열에 넣는다.
	var user = {name: name, age: age};
	users.push(user);
	console.log('가입성공!');
	cb();
}

var signout = function(name,cb) {
	if(!name) {
		console.log("탈퇴 실패! 이름을 입력하세요.")
		return;
	}

	for(var i=0; i<users.length; i++) {
		if(users[i].name === name) {
			users.splice(i, 1);
			console.log('탈퇴 성공!');
			cb();
			return;
		}
	}

	console.log("탈퇴실패! 이미 탈퇴한 회원이거나 가입한 적이 없습니다")
	return

}

var printusers = function() {
	console.log('******회원가입 현황******');
	for(var i=0; i<users.length; i++) {
		console.log(users[i]);
	}
	console.log('*************************');
}

signin('a', 10, printusers);
signin('b', 20, printusers);
signout('a', printusers);

signin('a', 10, function() {
	console.log('가입이 끝나고 콜백함수를 호출했다!!!!!!!!!!!!!!!');
});


printusers();