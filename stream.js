// There are two type of stream

var fs = require('fs');
var event=require('events');
var ee  = new event.EventEmitter();
  var result='';
  function read()
  {
    var readableStream = fs.createReadStream('input.txt');
    // var result='';
    readableStream.setEncoding('UTF8');
    // READABLE STREAM HAS EVENT LIKE EVENT EventEmitter   viz data,end,error
    readableStream.on('data', (chunk) =>{ result+=chunk});
    readableStream.on('end',() => { console.log(result)});

  }

  function write(){

// var readableStream = fs.createReadStream('input.txt');
// var result='';
// readableStream.setEncoding('UTF8');
// // READABLE STREAM HAS EVENT LIKE EVENT EventEmitter   viz data,end,error
// readableStream.on('data', (chunk) =>{ result+=chunk});
// readableStream.on('end',() => { console.log(result)});

var writablestream = fs.createWriteStream('output.txt');
writablestream.write(result,'UTF8');
writablestream.end();
writablestream.on('finish',() => { console.log('writing operation ended')});
}

ee.on('readfirst',()=>{read();});
ee.on('writefirst', () => { write();});

ee.emit('readfirst');
ee.emit('writefirst');
