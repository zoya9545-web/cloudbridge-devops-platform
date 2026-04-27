const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from Azure PaaS 🚀');
});

server.listen(process.env.PORT || 3000);
