var fs = require('fs');
var Q = require('q');


var exists = function() {
	var deferred = Q.defer();
	fs.exists('./copy.txt', function (exists) {
		deferred.resolve(exists);
	});
	return deferred.promise;
}
var readFile = Q.denodeify(fs.readFile);
var writeFile = Q.denodeify(fs.writeFile);

return exists()
.then(function(exists){
	console.log('exists 실행', exists)
	if(exists) {
		return readFile('./copy.txt', "utf-8");
	}
})
.then(function(data){
	console.log('readFile 실행')
	return writeFile('paste.txt', data);
})
.then(function(){
	console.log('writeFile 실행');
});

/*fs.exists('./copy.txt', function (exists) {
	if(exists) {
		console.log("it's there");
		fs.readFile('./copy.txt', "utf-8", function (err, data) {
			if (err) throw err;
			fs.writeFile('paste.txt', data, function (err) {
				if (err) throw err;
				onsole.log('It\'s saved!');
			});
		});
	} else {
		console.log("it's not exists");
	}
});*/






