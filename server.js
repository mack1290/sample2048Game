var express = require('express'),
    path = require('path'),
    app = express();

app.use('/public',express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile( __dirname + "/" + "index.htm" );
 })

app.get('/index.htm', function (req, res) {
    res.sendFile( __dirname + "/" + "index.htm" );
 })

app.get('/favicon.ico', (req, res) => res.status(204));

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
