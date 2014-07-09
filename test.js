var isthereinternet = require("./index.js");
isthereinternet(function(bool){
	if(bool) return console.log("is!")
	return console.log("isn't.")
})