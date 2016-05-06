//Import file system functionality
function readDirectory(folderName) {
	var fs = require('fs');

	if (folderName == undefined) {
		console.log("Please specify a folder");
		return;
	}

	fs.readdir(folderName, function(err, data){
		if (err) {
			throw err; 
		} //catch error
		console.log(data);
		data.forEach(function(file){ //loop through the file array
			fs.readFile(folderName + "/" + file, 'utf8', function(err, filedata){ //read each file in array
				if (err) {
				throw err;
				} //catch error
				console.log(JSON.parse(filedata));
			})
		})
	});
}

module.exports.readDirectory = readDirectory;
