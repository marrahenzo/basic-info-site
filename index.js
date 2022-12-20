const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    let url = new URL(req.url, `http://${req.headers.host}`);
    let fileName = url.pathname.slice(1);
    //Redirect to index
    if (fileName === '') fileName = 'index.html';
    fs.readFile(`./${fileName}`, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        //Used synchronous file read to avoid creating a separate function
        res.write(fs.readFileSync('./404.html', (_, data404) => data404));
        return res.end();
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
