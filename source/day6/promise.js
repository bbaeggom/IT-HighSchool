var Q = require('q');

var showcallback = function(i, callback) {
	console.log('SHOW: ',i);
	return callback(i+1); 
}

var show = function(i) {
	var deferred = Q.defer();
	showcallback(i, function(j) {
		deferred.resolve(j);
	});
	return deferred.promise;
}

//var test = Q.denodeify(showcallback2);

return show(1)
  .then(function(i) {
  	return show(i);
  })
  .then(function(i) {
    return show(i);
  })
  .then(function(i) {
    return show(i);
  })
  .then(function(i) {
    return show(i);
  })
  .then(function(i) {
    return show(i);
  })
  .then(function(i) {
    return show(i);
  })
  .then(function(i) {
    return show(i);
  })
  .then(function(i) {
    return show(i);
  })
  .then(function(i) {
    return show(i);
  })
  .then(function(i) {
    return show(i);
  })
