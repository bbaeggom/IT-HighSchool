var x = 0;
var y = 0;

if(x!=0) { // x=== 0 이랑 뭐가 다르지?
	console.log('x가 0입니다.');
} else {
	console.log('x가 0이 아닙니다');
}
// x=== 0 은 그냥숫자인지 문자열로된숫자인지도 판별함.
var z = '0';
if(z!=0) {
	console.log('z가 0입니다.')
} else {
	console.log('z가 0이 아닙니다.')
}

if(z!==0) {
	console.log('z가 0입니다.')
} else {
	console.log('z가 0이 아닙니다.')
}