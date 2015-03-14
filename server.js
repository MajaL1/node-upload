var express = require('express');
var multer = require('multer');

var app = express();

app.use(multer({
	dest: './uploads/',
	onFileUploadStart: function(file, req, res) {
		res.write('starting file upload...\n');
		res.write('\n\n');
	},
	onFileUploadData: function(file, data, req, res) {
		var fileSize = req.get('Content-Length');
		var doneSoFar = file.size;
		var percentage = Math.ceil((doneSoFar/fileSize) * 100);
		res.write('\n');
		res.write(percentage + '% done');
		res.write('\n');
	},
	onFileUploadComplete: function(file, req, res) {
		res.write('\n\n\ncompleting file upload...\n');
	}
}))

app.get('/', function(req, res) {
	res.sendfile('./index.html');
})

app.post('/', function(req, res) {
	res.write(JSON.stringify(req.files));
	res.end('\n\n\nfile uploaded!\n');
})

// app.post('/upload', function(req, res) {
// 	res.write(JSON.stringify(req.files));
// 	res.end('\n\n\nfile uploaded!\n');
// })

app.listen(process.env.PORT || 3000, function() {
	console.log('listening on port 3000');
})