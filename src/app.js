//Import file system functionality
var fs = require('fs');

var folderToRead = process.argv[2];

if (folderToRead == undefined) {
	console.log("Please specify a folder");
	return;
}

fs.readdir(folderToRead, function(err, data){
	if (err) throw err; //catch error
	console.log(data);
	data.forEach(function(file){ //loop through the file array
		fs.readFile(folderToRead + "/" + file, 'utf8', function(err, filedata){ //read each file in array
			if (err) {
			throw err;
			} //catch error
			console.log(JSON.parse(filedata));
		})
	})
});