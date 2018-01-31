const express = require('express');
const fs = require('fs');
const https = require('https');

const app = express();
const port = process.env.PORT || 2096;

//GETTING SSL
var credentials = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

var httpsServer = https.createServer(credentials, app);
//User app.listen for local unsecure servers, use httpsServer for secure servers that have the SSL
httpsServer.listen(port, function (req, res) {
	console.log(`Listening on port ${port}`);
});
