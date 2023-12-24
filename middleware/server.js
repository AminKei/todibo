const express = require('express');
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();
const app = express();

app.use('/api/products', (req, res) => {
  apiProxy.web(req, res, { target: 'http://192.168.196.110:3000/api/products' });
});

app.listen(3000, () => {
  console.log('Proxy server running on port 3000');
});
