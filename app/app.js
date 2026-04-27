const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from Azure PaaS Updated for Azure deployment 🚀🚀');
});

server.listen(process.env.PORT || 3000);
