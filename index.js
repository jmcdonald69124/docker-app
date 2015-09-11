var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('Running in docker!!');
});

app.listen(3000);
