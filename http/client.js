const http = require('http');

const options = {
  hostname: '127.0.0.1',
  port: 8000,
  path: '/',
  method: 'GET',
};

const req = http.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (err) => {
  console.error(err);
});

req.end();
