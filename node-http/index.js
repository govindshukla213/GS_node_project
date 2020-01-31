var http = require('http');
var fs = require('fs');
var path = require('path');

var hostname ='localhost';
var port =8000;

var server = http.createServer((req,res) =>{

        console.log('the URL for request is'+req.url+'and post'+req.method);
        // res.statusCode=200;
        // res.setHeader('Content-Type','text/html');
        // res.end('<html><body><h1>Hello World</h1></body></html>');
        
        if(req.method=='GET'){
                var fileurl;
                if(req.url=='/'){
                        fileurl='/index.html';
                }else{
                        fileurl=req.url;
                }
                var filePath=path.resolve('./public'+fileurl);
                console.log('fileUrl is'+fileurl);
                console.log('filepath is'+filePath);
                var filext=path.extname(filePath);
                if(filext=='.html')
                {
                        fs.exists(filePath,(exists)=>{
                                if(!exists){
                                        res.statusCode=404;
                                        res.setHeader('Content-Type','text/html');
                                        res.end('<html><body><h1>File not Found</h1></body></html>');
                                }
                                res.statusCode=200;
                                res.setHeader('Content-Type','text/html');
                                fs.createReadStream(filePath).pipe(res);
                                
                        });
                }else{
                        res.statusCode=404;
                        res.setHeader('Content-Type','text/html');
                        res.end('<html><body><h1>not a Html file</h1></body></html>');
                            
                }
        }else{
                res.statusCode=404;
                res.setHeader('Content-Type','text/html');
                res.end('<html><body><h1>not a GET METHOD </h1></body></html>');
              
        }

});

server.listen(port,hostname,()=>{ console.log(`http://${hostname}:${port}`); });