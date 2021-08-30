//importing required node module
const fs = require('fs');

//function to write html data to file
const writeFile = data =>{
	fs.writeFile('./dist/index.html', data , err => {

if (err){
	console.log(err);
	return;
}
else{
	console.log("File created")
}


	})
};

module.exports = writeFile;