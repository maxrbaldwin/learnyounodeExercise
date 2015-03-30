// Modules
var fs = require('fs');

for(var i = 2; i < process.argv.length; i++) {
	var file = fs.readFileSync(process.argv[i]).toString().split('\n');
}

console.log(file.length - 1);

