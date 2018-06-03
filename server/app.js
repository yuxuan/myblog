var express = require('express');
var app = express();
var path = require('path');

var staticPath = path.resolve(__dirname, '../client/dist/');
app.use(express.static(staticPath));

app.listen(8080, function() {
  console.log('listening');
});