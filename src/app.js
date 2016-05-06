//Import file system functionality
var fs = require('fs');

fs.readdir('resources', function(err, data){
	if (err) throw err; //catch error
	console.log(data);
	data.forEach(function(file){ //loop through the file array
		fs.readFile('resources/' + file, 'utf8', function(err, filedata){ //read each file in array
			if (err) {
			throw err;
			} //catch error
			filedata = JSON.parse(filedata); 
			console.log(filedata);
		})
	})
});