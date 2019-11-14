const http = require('http'),
  fs = require('fs'),
  url = require('url');

http.createServer((request, response) => {
  var addr = request.url;
  q = url.pars(addr, true),
  filePath = '';

  if (q.pathname.includes('documentation')) {
    filePath = (_dirname + '/documentation.html');
  } else {
    filePath = 'index.html';
  }

  fs.readFile(filePath, function (err, data) {
    if (err) {
      throw err;
    }

    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write(data);
    response.end('Hello Node!\n');
  });
}).listen(8080);



/*console.log(q.host);//returns localhost:8080
console.log(q.pathname);//returns /default.html
console.log(q.search);//returns ?year=2017&month=february

var qdata = q.query;//returns an object: {year: 2017, month: february}
console.log(qdata.month);//return 'february'

http.createServer((request, response) => {

}).listen(8080);

console.log('My first Node test server is running on Port 8080.');*/
