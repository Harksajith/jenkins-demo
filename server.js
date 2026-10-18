const http = require('http');
http.createServer((req,res)=>res.end('Hello from Jenkins pipeline!')).listen(3000);
