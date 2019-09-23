var express = require('express'),
    path = require('path'),
    app = express();

app.use('/public',express.static(path.join(__dirname, 'public')));

app.get('/favicon.ico', function (req, res) { 
     res.status(204);
})

app.get('/', function (req, res) {
    res.sendFile( __dirname + "/" + "index.htm" );
 })

app.get('/index.htm', function (req, res) {
    res.sendFile( __dirname + "/" + "index.htm" );
 })

var server = app.listen(process.env.PORT || 3000, function () {
   let host = server.address().address;
   let port = server.address().port;
   
   console.log("Example app listening at http://%s:%s", host, port)
})
