var fs = require('fs');
var Q = require('q');

/*

  Q 라이브러리를 활용해서 callback 패턴 함ㅂ수를 Promise 패턴 함수로 바꾸는 방법

  1) Node.js 의 callback 패턴을 만족하는 경우

    * callback 함수의 결과의 첫 번째 파라미터가 err이고,
      두번째 파라미터로부터 결과를 보내는 형식

      fs.readFile('/etc/passwd', function (err, data) {
	    if (err) throw err;
	    console.log(data);
      });

      var promiseFunction = Q.denodeify(readFile);

  2) Node.js 의 callback 패턴을 만족하지 않는 경우

     fs.exist('/etc/passwd', function (exists) {
	   console.log(exists ? "it's there" : 'no passwd!');
     });

     var promiseFunction = function(){
	var deferred = Q.defer();
	fs.exists('/etc/passwd', function(exists) {
		console.log(exists ? "it's there" : 'no passwd!');
		defferd.resolve(exists);
     });
     return deferred.promise;
	}
  
 */

// JavaScript는 브라우저를 위한 스크립트 언어라서
// File 읽고, 쓰는 시스템 함수를 제공하지 않는다.
// fs 는 Node.js가 제공하는 파일 시스템 함수이다. (Node.js 문서 참고)

fs.exists('./copy.txt', function(exists) {
	if(exists) {
		console.log("파일을 발견했습니다.");
		fs.readFile('./copy.txt', "utf-8", function (err, data) {
			if (err) throw err;
			fs.writeFile('paste.txt', data, function (err) {
				console.log('파일을 저장했습니다.');
			});
		});
	} else {
		console.log("파일을 발견하지 못했습니다.");
	}
});