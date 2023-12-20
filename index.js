const http = require('http');
const path = require('path');
const fs = require('fs');


const server = http.createServer((req, res) => {
    let page = '';
    let status = '200';
    switch (req.url) {
        case '/':
            page = 'index.html';
            break;
        case '/about':
            page = 'about.html';
            break;
        case '/contact-me':
            page = 'contact-me.html';
            break;
        default:
            page = 'error.html';
            status = '404';
            break;
    }

    let filePath = path.join(__dirname, 'public', page);
    console.log(req.url);
    fs.readFile(filePath, (err, data) => {
        res.writeHead(status, {'Content-type': 'text/html'});
        res.end(data,'utf8');
    });
})

server.listen(8000, () => {
    console.log('server listening...');
})