for(var i = 0; i < 10; i ++){
	console.log('i:'+i);
}

console.log('---');

for(var i = 0; i < 10; i ++){
	if(i === 5) {
		break;
	}
	console.log('i:'+i);
}

console.log('---');

for(var i = 0; i < 10; i ++){
	if(i === 5) {
		continue;
	}
	console.log('i:'+i);
}

console.log('---');

for(var i = 0; i < 10; i ++){
	for(var j = 0; j < 10; j++){
		console.log('i:'+i+'\tj:'+j);
	}
}