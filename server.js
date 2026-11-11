const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const PORT = Number(process.env.PORT || 3000);
const PUBLIC_DIR = path.join(__dirname, 'public');
const INDEX_FILE = path.join(PUBLIC_DIR, 'index.html');

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

  if (url.pathname === '/api/health') {
    res.writeHead(200, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' });
    res.end(JSON.stringify({ status: 'ok', app: 'TradeGuard', version: '0.1.0', mode: 'demo-only' }));
    return;
  }

  if (url.pathname === '/' || url.pathname === '/index.html') {
    fs.readFile(INDEX_FILE, (error, content) => {
      if (error) {
        res.writeHead(500, { 'content-type': 'text/plain; charset=utf-8' });
        res.end('TradeGuard could not load the dashboard.');
        return;
      }
      res.writeHead(200, { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' });
      res.end(content);
    });
    return;
  }

  res.writeHead(404, { 'content-type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({ error: 'Not found' }));
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`TradeGuard running on port ${PORT}`);
});
