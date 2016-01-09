//JavaScript 함수는 순서를 보장하지 않기 때문에
//대부분 callback 패턴의 함수 모양을 가진다.
//callback 함수는 특정 시점에 호출할 함수를 의미한다.
//JavaScript 의 함수는 First Class Object 이다.
/*
First Object란,
  1) 변수에 저장할 수 있다.
  2) 함수의 파라미터로 전달할 수 있다.
  3) 함수의 반환값으로 사용할 수 있다.
  4) 자료 구조에 저장할 수 있다.

  */

  var show = function(i, callback) {
 	console.log('SHOW: ', i);
  	return callback(i+1);
  }


show(1, function() {
	console.log('콜백함수가 호출됐습니다.');
});

show(1, function(i) {
	show(i, function(i) {
		show(i, function(i) {
			show(i, function(i) {
				show(i, function(i) {
					show(i, function(i) {
						show(i, function(i) {
							show(i, function(i) {
								show(i, function(i) {
									show(i, function(i) {
										console.log('it\'s callback hell...');
									});
								});
							});
						});
					});
				});
			});
		});
	});
}
