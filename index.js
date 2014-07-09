var http = require("http");
module.exports = function(cb){
	http.get("http://google.com/",function(res){
		res.emit('end');
		return cb(true)
	}).on("error",function(err){
		return cb(false)
	})
}