var test = {a: 1, b: 2, c: 3};
console.log(test.a);
console.log(test.b);
console.log(test.a + test.b + test.c);

//객체 프로퍼티에 접근하는 방법은 "."
//객체 안에 객체가 있을 수 있나요?
var test2 = {a: test, b:4};
console.log(test2.a);
console.log(test2.a.a);
console.log(test2.a.b);

// JSON 형식으로
// 클라이언트와서버가값을주고 받는데,이게 객체와비슷

for(key in test) {
	console.log('key: '+key+' value: '+test[key]);
	//console.log('key: '+key: )
}