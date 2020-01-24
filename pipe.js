var fs = require('fs');
var readableStream = fs.createReadStream('input.txt');
var writablestream = fs.createWriteStream('output.txt');
readableStream.pipe(writablestream);
