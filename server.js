var formidable = require('formidable');
var util = require('util');
var fs = require('fs');

var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);

server.listen(process.env.PORT || 3000, function() {
	console.log('listening on port 3000');	
});

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
})

app.post('/', function(req, res) {
	var form = new formidable.IncomingForm();
	form.keepExtensions = true;
	form.parse(req);
	form.on('file', function(name, file) {
		console.log(file);
		var rstream = fs.createReadStream(file.path);
		var wstream = fs.createWriteStream(file.name);
		rstream.pipe(wstream);
	})
})

// app.post('/', function(req, res) {
// 	var form = new formidable.IncomingForm();
// 	form.uploadDir = __dirname + '/uploads';
// 	form.keepExtensions = true;
// 	form.parse(req);
// 	var percentages = [];
// 	form.on('progress', function(bytesRec, bytesExp) {
// 		var fileSize = bytesExp;
// 		var doneSoFar = bytesRec;
// 		var percentage = Math.ceil((doneSoFar/fileSize) * 100);
// 		res.write(percentage.toString());
// 		res.write('\n');
// 	})
// 	form.on('end', function() {
// 		res.end('complete.');
// 	})
// })
